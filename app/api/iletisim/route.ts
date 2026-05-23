import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hizmetTuru, nereden, nereye, odaSayisi, esyaDetayi, adSoyad, telefon, eposta } = body;

    const transporter = nodemailer.createTransport({
      host: "gator2105.hostgator.com",
      port: 465,
      secure: true, 
      auth: {
        user: "info@evdenevetasima.org",
        pass: "jgAiz~L8B[yq",
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"Evden Eve Sistem" <info@evdenevetasima.org>`,
      to: "info@evdenevetasima.org",
      subject: `🚨 YENİ TALEP: ${hizmetTuru || 'İletişim Formu'} - ${adSoyad}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e3a8a; border: 1px solid #e5e7eb; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Yeni Dijital Ekspertiz Talebi</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Müşteri:</td><td>${adSoyad}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td><a href="tel:${telefon}">${telefon}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">E-Posta:</td><td>${eposta || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Hizmet:</td><td>${hizmetTuru || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Rota:</td><td>${nereden || '-'} ➔ ${nereye || '-'}</td></tr>
            ${odaSayisi && odaSayisi !== 'Belirtilmedi' ? `<tr><td style="padding: 8px 0; font-weight: bold;">Oda Sayısı:</td><td>${odaSayisi}</td></tr>` : ''}
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
            <strong style="color: #1e3a8a; display: block; margin-bottom: 8px;">Eşya & Proje Detayları / Mesaj:</strong>
            <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${esyaDetayi || 'Mesaj bırakılmadı.'}</p>
          </div>
          
          <p style="font-size: 12px; color: #9ca3af; margin-top: 30px; text-align: center;">
            Bu e-posta evdenevetasima.org sisteminden otomatik olarak gönderilmiştir.
          </p>
        </div>
      `,
    };

    // 4. Maili Gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });

  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json({ message: 'E-posta gönderilirken bir hata oluştu.' }, { status: 500 });
  }
}