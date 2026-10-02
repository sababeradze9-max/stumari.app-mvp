import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Copy, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface QrCodeViewProps {
  url: string;
  size?: number;
  showActions?: boolean;
  propertyName?: string;
}

export const QrCodeView: React.FC<QrCodeViewProps> = ({
  url,
  size = 200,
  showActions = true,
  propertyName = 'Guest Guide'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { showToast } = useApp();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 1.5,
      color: {
        dark: '#1c1917',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'H'
    }, (err) => {
      if (err) console.error('Error generating QR code:', err);
    });
  }, [url, size]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `stumari-qr-${propertyName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
    showToast('QR Code image downloaded');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    showToast('Guest guide URL copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-white rounded-2xl shadow-sm border border-stone-200/90 inline-block">
        <canvas ref={canvasRef} className="rounded-lg block" />
      </div>

      {showActions && (
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
            title="Copy guest link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Link'}</span>
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
            title="Download PNG QR image"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PNG</span>
          </button>
        </div>
      )}
    </div>
  );
};
