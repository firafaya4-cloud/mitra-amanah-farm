import React from "react";
import { createRoot } from "react-dom/client";
import {
  MessageCircle,
  MapPin,
  Star,
  Scale,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Home,
  Wheat,
  CheckCircle2,
  ArrowRight,
  Phone,
  BookOpen,
  Users,
} from "lucide-react";
import "./style.css";

const whatsappNumber = "6287738663009";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Assalamu'alaikum, saya ingin konsultasi/pesan qurban di Mitra Amanah Farm."
)}`;

const services = [
  ["Qurban", "Pilihan hewan qurban sehat, terawat, dan siap bantu ibadah lebih tenang.", ShieldCheck],
  ["Aqiqah", "Layanan aqiqah praktis, amanah, dan ramah untuk keluarga muslim.", HeartHandshake],
  ["Penyaluran Qurban", "Distribusi qurban lebih tertata untuk menebar manfaat lebih luas.", Users],
  ["Sekolah Qurban Halal / ASUH", "Pelatihan qurban dari pemula sampai mahir sesuai syari’at.", GraduationCap],
  ["Edukasi & Pelatihan Qurban", "Pendampingan ilmu qurban yang profesional, hangat, dan mudah dipahami.", BookOpen],
];

const advantages = [
  ["Hewan sehat dan terawat", ShieldCheck],
  ["Timbangan jelas", Scale],
  ["Kandang bersih", Home],
  ["Pakan berkualitas", Wheat],
  ["Proses sesuai syari’at", CheckCircle2],
  ["Pelayanan amanah dan profesional", HeartHandshake],
  ["Bisa konsultasi sebelum membeli", MessageCircle],
];

const catalog = [
  {
    type: "Domba Qurban",
    weight: "20–25 kg",
    price: "Rp 1.500.000",
    status: "Tersedia",
    img: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Kambing Qurban",
    weight: "26–30 kg",
    price: "Mulai Rp 2.400.000",
    status: "Terbatas",
    img: "https://images.unsplash.com/photo-1533318087102-bf2056bbd18e?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Sapi Qurban",
    weight: "250–300 kg",
    price: "Hubungi Admin",
    status: "Pre-order",
    img: "https://images.unsplash.com/photo-1522900110472-6305bc185b58?auto=format&fit=crop&w=900&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <span className="eyebrow">
        <Sparkles size={16} /> {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#beranda" className="brand">
            <div className="logo-circle">MAF</div>
            <div>
              <b>MITRA AMANAH FARM</b>
              <span>Swalayan Qurban & Aqiqah</span>
            </div>
          </a>

          <nav>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#katalog">Katalog</a>
            <a href="#program">Program</a>
            <a href="#kontak">Kontak</a>
          </nav>

          <a href={whatsappLink} className="btn btn-gold">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </header>

      <section id="beranda" className="hero">
        <div className="ornament one"></div>
        <div className="ornament two"></div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">
              <Leaf size={16} /> Dari Farm Terpercaya untuk Ibadah yang Lebih Tenang
            </span>

            <h1>
              Qurban Mudah, <em>Aqiqah Berkah</em>
            </h1>

            <p>
              Swalayan Qurban & Aqiqah terpercaya dengan hewan sehat, proses amanah,
              dan pelayanan profesional.
            </p>

            <div className="hero-buttons">
              <a href={whatsappLink} className="btn btn-gold big">
                Pesan Qurban Sekarang <ArrowRight size={18} />
              </a>
              <a href={whatsappLink} className="btn btn-outline big">
                Konsultasi via WhatsApp
              </a>
            </div>

            <div className="hero-points">
              <div>Hewan Sehat</div>
              <div>Amanah</div>
              <div>Sesuai Syari’at</div>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1522900110472-6305bc185b58?auto=format&fit=crop&w=900&q=80"
              alt="Hewan qurban sehat"
            />
            <div className="hero-caption">
              <b>Bukan Qurban Biasa</b>
              <span>Hewan Sehat, Pelayanan Amanah, Proses Sesuai Syari’at</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="section about">
        <div>
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80"
            alt="Farm"
          />
        </div>

        <div>
          <span className="eyebrow">Tentang Mitra Amanah Farm</span>
          <h2>Amanah dalam pelayanan, hangat seperti keluarga.</h2>
          <p>
            Mitra Amanah Farm adalah tempat layanan qurban dan aqiqah yang
            mengutamakan amanah, kualitas hewan, kebersihan kandang, kesehatan
            ternak, dan pelayanan yang ramah. Kami hadir untuk membantu setiap
            keluarga menjalankan ibadah dengan lebih mudah, tenang, dan penuh
            keberkahan.
          </p>

          <div className="mini-grid">
            {["Profesional", "Hangat", "Terpercaya", "Kekeluargaan"].map((item) => (
              <div key={item}>
                <CheckCircle2 size={20} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="layanan" className="section cream">
        <SectionTitle
          eyebrow="Layanan Utama"
          title="Solusi Qurban & Aqiqah yang Lengkap"
          subtitle="Pilih layanan sesuai kebutuhan, mulai dari pemesanan hewan sampai edukasi qurban yang profesional."
        />

        <div className="cards five">
          {services.map(([title, desc, Icon]) => (
            <div className="card" key={title}>
              <div className="icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Keunggulan"
          title="Kenapa Memilih Mitra Amanah Farm?"
          subtitle="Kami menjaga kualitas dari farm hingga pelayanan agar pembeli merasa nyaman dan percaya."
        />

        <div className="advantage-grid">
          {advantages.map(([title, Icon]) => (
            <div className="advantage" key={title}>
              <Icon size={22} />
              <b>{title}</b>
            </div>
          ))}
        </div>
      </section>

      <section id="program" className="section dark">
        <div className="program">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
            alt="Program kebaikan"
          />

          <div>
            <span className="badge gold">Qurban Sekaligus Beramal</span>
            <h2>Berqurban hari ini, menebar manfaat lebih lama.</h2>
            <p>
              Setiap pembelian hewan qurban ikut mendukung wakaf Al-Qur’an di
              Rumah Qur’an H. Katimin. Membeli qurban di Mitra Amanah Farm juga
              berarti ikut memberdayakan petani di Kampung Ternak Wonogiri.
            </p>

            <div className="program-cards">
              <div>
                <HeartHandshake />
                <h3>Wakaf Al-Qur’an</h3>
                <p>Kebaikan qurban ikut mengalir untuk dakwah dan pendidikan Qur’an.</p>
              </div>
              <div>
                <Users />
                <h3>Pemberdayaan Petani</h3>
                <p>Ikut mendukung peternak lokal agar tumbuh bersama.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="katalog" className="section">
        <SectionTitle
          eyebrow="Katalog Hewan Qurban"
          title="Pilih Hewan Qurban dengan Mudah"
          subtitle="Tampilan katalog dibuat ringkas agar nyaman dilihat dari HP dan cepat untuk melakukan pemesanan."
        />

        <div className="cards three">
          {catalog.map((item) => (
            <div className="catalog-card" key={item.type}>
              <img src={item.img} alt={item.type} />
              <div>
                <span>{item.status}</span>
                <h3>{item.type}</h3>
                <p>
                  Bobot: <b>{item.weight}</b>
                </p>
                <h4>{item.price}</h4>
                <a href={whatsappLink} className="btn btn-green">
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cream">
        <div className="school">
          <div>
            <span className="eyebrow">Sekolah Qurban Halal / ASUH</span>
            <h2>Sekolah Qurban Halal Mitra Amanah Farm</h2>
            <h3>Dari Pemula Sampai Mahir – Profesional sesuai syari’at</h3>
            <p>
              Pelatihan edukatif, formal, premium, dan meyakinkan untuk memahami
              proses qurban secara benar dan aman.
            </p>

            <div className="list-grid">
              {[
                "20% teori, 80% praktik langsung",
                "Pemilihan ternak sehat",
                "Teknik praktis merebahkan sapi",
                "Penyembelihan sesuai syari’at",
                "Penanganan daging qurban ASUH",
                "Diskusi problem solving kasus lapangan",
              ].map((point) => (
                <div key={point}>
                  <CheckCircle2 size={20} /> {point}
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80"
            alt="Sekolah qurban"
          />
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Testimoni"
          title="Dipercaya Pelanggan"
          subtitle="Kesan hangat dari pelanggan yang sudah memilih Mitra Amanah Farm."
        />

        <div className="cards three">
          {[
            ["Bu Rina", "Pelayanannya ramah, hewannya sehat, dan prosesnya jelas."],
            ["Pak Ahmad", "Nyaman konsultasi sebelum membeli. Informasi bobot dan harga transparan."],
            ["Mbak Sari", "Kandang bersih dan admin cepat merespons. InsyaAllah repeat order."],
          ].map(([name, review]) => (
            <div className="testimonial" key={name}>
              <div className="avatar">{name[0]}</div>
              <h3>{name}</h3>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cream">
        <SectionTitle
          eyebrow="Galeri Farm"
          title="Suasana Farm & Kegiatan"
          subtitle="Kandang, hewan qurban, perawatan, penyaluran, dan kegiatan pelatihan qurban."
        />

        <div className="gallery">
          {gallery.map((img, i) => (
            <img src={img} alt={`Galeri ${i + 1}`} key={img} />
          ))}
        </div>
      </section>

      <section id="kontak" className="section">
        <div className="contact-box">
          <div>
            <span className="badge gold">Kontak & Lokasi</span>
            <h2>Siap konsultasi qurban atau aqiqah?</h2>
            <p>
              Hubungi Mitra Amanah Farm untuk cek ketersediaan hewan, konsultasi
              kebutuhan, dan pemesanan.
            </p>

            <p>
              <Phone /> WhatsApp: 087738663009
            </p>
            <p>
              <MessageCircle /> Instagram: @mitra.amanah.farm
            </p>
            <p>
              <MapPin /> Lokasi: Mitra Amanah Farm
            </p>

            <div className="contact-buttons">
              <a href={whatsappLink} className="btn btn-gold">
                Chat WhatsApp
              </a>
              <a href="https://instagram.com/mitra.amanah.farm" className="btn btn-outline">
                Lihat Instagram
              </a>
              <a href="https://maps.google.com/?q=Mitra%20Amanah%20Farm" className="btn btn-outline">
                Buka Google Maps
              </a>
            </div>
          </div>

          <div className="contact-logo">
            <div className="logo-big">MAF</div>
            <h3>Mitra Amanah Farm</h3>
            <p>Swalayan Qurban & Aqiqah</p>
            <small>Amanah dalam pelayanan, berkah dalam setiap qurban.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="brand">
          <div className="logo-circle">MAF</div>
          <div>
            <b>Mitra Amanah Farm – Swalayan Qurban & Aqiqah</b>
            <span>Amanah dalam pelayanan, berkah dalam setiap qurban.</span>
          </div>
        </div>
        <p>© Mitra Amanah Farm</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
