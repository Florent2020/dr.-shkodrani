import banner from "../assets/banner.png";
import shkodrani from "../assets/dr.shkodrani.png";
import dental from "../assets/dental-clinic1.png";
import ourStory from "../assets/our-story.png";
import emergency from "../assets/emergency.jpg";

export const clinic = {
  phone: "+383 44 400 088",
  email: "dr_shkodrani@dental-ks.com",
  address: "Rruga Mbretëresha Teutë, Mitrovicë 40000, Kosovo",
  hoursShort: "Mon – Sat: 9:00 AM – 8:00 PM",
};

export const images = {
  hero: banner,
  clinic:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
  doctor: shkodrani,
  team: dental,
  clinic1: ourStory,
  care: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=85",
  clean:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=85",
  whitening:
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1600&q=85",
  implants:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=85",
  orthodontics:
    "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1600&q=85",
  emergency: emergency,
  beforeAfter:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1300&q=85",
};

export const stats = [
  ["20+", "Years Experience"],
  ["10,000+", "Happy Patients"],
  ["Certified", "Licensed Professionals"],
  ["100%", "Safe & Sterile"],
];

export const services = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    text: "Comprehensive dental exams, fillings, and preventive care for the whole family.",
    price: "€30",
    image: images.care,
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    text: "Professional cleaning to remove plaque, tartar, and surface stains.",
    price: "€40",
    image: images.clean,
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    text: "Brighten your smile up to 8 shades whiter with professional whitening.",
    price: "€80",
    image: images.whitening,
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    text: "Permanent tooth replacement that looks and feels completely natural.",
    price: "€300",
    image: images.implants,
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    text: "Straighten your teeth with modern braces or invisible aligners.",
    price: "€250",
    image: images.orthodontics,
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    text: "Urgent dental care when you need it most — same-day appointments available.",
    price: "€50",
    image: images.emergency,
  },
];

export const reviews = [
  [
    "Arjeta K.",
    "General Dentistry",
    "I was terrified of the dentist before coming to Klinika Dentare Dr. Shkodrani. Dr. Shkodrani made me feel so comfortable, and the treatment was completely painless. I actually look forward to my appointments now!",
  ],
  [
    "Besnik M.",
    "Teeth Whitening",
    "Got my teeth whitened here and the results are amazing! My smile has never looked this good. The staff is professional and the clinic is spotless. Highly recommend!",
  ],
  [
    "Drita H.",
    "Dental Implants",
    "The dental implant procedure was smooth from start to finish. Dr. Shkodrani explained everything clearly and the result looks completely natural. Worth every penny.",
  ],
  [
    "Fatmir S.",
    "General Dentistry",
    "My whole family comes here. The kids love the friendly staff, and we trust Klinika Dentare Dr. Shkodrani completely with our dental health. Best dental clinic in Mitrovica!",
  ],
  [
    "Gentiana R.",
    "Emergency Care",
    "I had an emergency toothache on a Saturday and they fit me in right away. The pain was gone within the hour. So grateful for this team!",
  ],
  [
    "Hasan P.",
    "Orthodontics",
    "My orthodontic treatment with clear aligners has been life-changing. Nobody even notices I am wearing them, and my teeth are getting straighter every month.",
  ],
];

export const faqs = [
  "Does dental treatment hurt?",
  "How much does teeth whitening cost?",
  "Do you accept insurance?",
  "How often should I visit the dentist?",
  "What should I do in a dental emergency?",
  "How long do dental implants last?",
  "Are clear aligners as effective as traditional braces?",
  "Is teeth whitening safe?",
];
