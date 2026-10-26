// All products and collections in one place.
// Product data (pictures, description, fabric, price) comes from the ammarakhan.com product feed.
// To add a product: add it to `productList`, then put its id in a collection's `productIds`.

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

// Fallbacks for fields a product does not have
const groupDefaults = {
  bridal: { sizes: ['Made to Measure'], badge: 'MADE TO ORDER', tag: 'Hand Embellished Couture', dispatch: '8–10 weeks after Order Confirmation' },
  luxury: { badge: 'READY TO SHIP', tag: 'Perfectly Hand Embellished', dispatch: '3 working days after Order Confirmation' },
  demi: { badge: 'MADE TO ORDER', tag: 'Hand Embellished Couture', dispatch: '8 weeks after Order Confirmation' },
  kaftan: { badge: 'TRENDING', tag: 'Perfectly Hand Embellished', dispatch: '3 working days after Order Confirmation' },
  prints: { badge: 'READY TO SHIP', tag: 'Perfectly Hand Embellished', dispatch: '3 working days after Order Confirmation' },
  readytowear: { badge: 'BEST SELLER', tag: 'Perfectly Hand Embellished', dispatch: '3 working days after Order Confirmation' },
};

const collectionLabels = {
  "bridal": "BRIDAL COUTURE",
  "luxury": "LUXURY FORMALS",
  "demi": "DEMI COUTURE",
  "kaftan": "AK KAFTAN",
  "prints": "JOLIE",
  "readytowear": "READY TO WEAR"
};

// Bridal pieces have no price in the feed ("Price on Request"). These are placeholders, change them to the real prices.
const bridalPlaceholderPrice = 'Rs. 450,000';

const productList = [
  {
    "id": "veil-of-dawn-br-05",
    "group": "bridal",
    "name": "Veil of Dawn (BR-05)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/23_c2cf5896-56b4-40dd-b60a-f3622e5ba2b0.jpg?v=1752767740&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/24_111ee237-a1aa-4e61-9787-0be12af502ea.jpg?v=1752767740&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/25_e97fa566-87df-4285-9df2-176e5bc4e7a4.jpg?v=1752767740&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/26_c44896d8-794e-4abd-8826-d89fe7ede657.jpg?v=1752767740&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/22_4944adfa-1cd7-4d05-8051-e0d68da51b99.jpg?v=1752767740&width=1000"
    ],
    "description": "A vision of grace and grandeur, this exquisite bridal ensemble is a symphony of contemporary sophistication. Designed for the modern AMMARA KHAN bride, the gown features an elongated silhouette, with a slight train, that flatters and enhances the feminine form. Intricately hand-embellished, the delicate crystals catch the light with every movement. At the same time, resham, dabka, and fine pearls are artfully interwoven with French knots to weave a story of texture and depth in the form of delicate vines and florals. Completing the look, the meticulously adorned gossamer veil, in soft tones of peach and coral, with small lace flowers elevates the ensemble to perfection, adding an ethereal charm to the beautifully embellished gown.",
    "fabric": {
      "Gown": "Net",
      "Veil": "Net"
    },
    "color": "Peach",
    "pieces": "2 Pcs (Gown + Veil)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "the-gold-whisper-br-06",
    "group": "bridal",
    "name": "The Gold Whisper (BR-06)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/17_714dc8d2-e63c-436a-8a25-aff18f714f44.jpg?v=1752764765&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/19_fef0c276-d376-4152-8433-bb0afe1d1e9f.jpg?v=1752764794&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/20_31d805be-e150-4813-b516-daaad3d5a0c9.jpg?v=1758536977&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/21_47d9ed4f-413a-4cb0-b7fc-0b0bb1565a90.jpg?v=1758536977&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/18_6929514e-77ca-4924-9d08-11fdf2361227.jpg?v=1758536977&width=1000"
    ],
    "description": "Representing timeless magnificence, this bridal ensemble by AMMARA KHAN is a vision of regal allure. Crafted as an heirloom masterpiece, it captures the soul of traditional couture with a whisper of modern finesse. The front-open peshwas, fashioned from ethereal burnt coral tissue, shimmer beautifully under delicate hand embellishments with rich zardozi and resham work. Paired with it, is a breathtaking red farshi lehnga, with heavily embellished zardozi border covering yards of the ‘gouth’. With handwork that is meticulously detailed, this lehnga is a dream woven in silk and gold. Completing the look is an iridescent-toned tissue dupatta, draped with understated elegance. The subtle contrast reflects the careful attention to detail that defines this bridal outfit..",
    "fabric": {
      "Pishwas": "Pure Tissue",
      "Lehnga": "Brocade",
      "Dupatta": "Pure Tissue",
      "Pouch": "Pure Raw Silk"
    },
    "color": "Berry Red",
    "pieces": "4pcs (Peshwas + Lehnga + Dupatta + Pouch)",
    "dispatch": "12 weeks from Order Confirmation"
  },
  {
    "id": "a-royal-symphony-br-07",
    "group": "bridal",
    "name": "A Royal Symphony (BR-07)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_ddbd16c4-8266-4e55-bdf7-00c261d84ee6.jpg?v=1752764629&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_e4332ecd-892d-411b-bc88-d1c664ad6414.jpg?v=1752764629&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7a.jpg?v=1758537187&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_5040c8d8-20fe-4d21-83c9-29e245077dcf.jpg?v=1758537187&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8_146c3068-2ad4-4bda-b7f0-2f60ae9ea348.jpg?v=1752764629&width=1000"
    ],
    "description": "Wrapped in a palette of deep red, burnt rust, and sunset pinkish-gold hues, this bridal ensemble is an ode to the Subcontinent’s regal past—a homage to the Maharani splendor. The shirt is sumptuously embellished with intricate handwork, where every stitch unfolds across the fabric like poetry written in gold and silver threads. The velvet appliqué on the hemline adds dimension and drama, grounding the design in a deep, luxurious texture. Flowing beneath is a majestic farshi gharara: its voluminous trailing enhances the elegance of the outfit, where each bead and sequin catches the light like the glint of antique heirlooms. Three-dimensional florals made in tilla add further detail to the design. Completing the ensemble is a soft tissue dupatta, with a subtle sheen that ties the entire look together.",
    "fabric": {
      "Shirt": "Pure Khaddi Silk",
      "Gharara": "Brocade",
      "Dupatta": "Pure Tissue",
      "Pouch": "Karandi"
    },
    "color": "Red",
    "pieces": "4 Pcs (Pishwas + Sharara + Dupatta + Pouch)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "blush-reverie-br-01",
    "group": "bridal",
    "name": "Blush Reverie (BR-01)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/27_fb5fc08f-0665-43e0-b775-9ad8a3774765.jpg?v=1752764382&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/28_dd84a8d6-c1f0-4302-b1ff-8b665029d0a2.jpg?v=1752764382&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/29_fecc02a7-ee8e-483f-b796-44833f0ea596.jpg?v=1752764382&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/30_eb67133d-a978-4bde-8b9c-f253281e1310.jpg?v=1752764382&width=1000"
    ],
    "description": "An ode to timeless grandeur, this breathtaking peach bridal ensemble exudes opulence with each detail. The look is anchored by a majestic brocade lehnga, designed with a sweeping train, embellished to perfection using fine zardozi mixed with crystals and resham work, that cascades into a dramatic silhouette. Our signature ‘jhaalar’ motifs create a delightful visual as they are intertwined with floral patterns. It is paired with a front-open tulle peshwas that is fully embellished, featuring a plunging neckline that lends modern allure, aligning perfectly with the fitted inner blouse that is also hand embellished, enhancing its delicacy. Fine vines cover the sleeves, and an exquisite butterfly crafted in ‘vasli’ is a detail to cherish. This grand bridal ensemble comes with a shell pink tissue dupatta which is adorned intricately with an all-over border and exquisite hydrangea floral motifs on the pallus, entwined to form a garden-inspired composition. In addition to the dupatta, this bridal outfit comes with a grand veil, adding layers of romantic softness to the entire look.",
    "fabric": {
      "Peshwas": "Net",
      "Lehnga": "Brocade",
      "Dupatta": "Pure Tissue",
      "Veil": "Net",
      "Pouch": "Jama war"
    },
    "color": "Champion Peach",
    "pieces": "5 Pcs (Peshwas +Lehnga +Veil + Dupatta + Pouch)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "the-scarlet-heirloom-br-03",
    "group": "bridal",
    "name": "The Scarlet Heirloom (BR-03)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/13_2e13442e-f087-4772-8b41-54e551197bf8.jpg?v=1752764471&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/14_ed1446bd-aac3-4d2a-84ed-eccbd95d0146.jpg?v=1752764471&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/16_b7b2b1bd-4be3-4b9b-87e1-cafb08894dcb.jpg?v=1752764471&width=1000"
    ],
    "description": "A masterstroke in red, this exquisite bridal creation captures the very soul of tradition and elegance. Steeped in the grandeur of bygone eras, the ensemble weaves together the richness of heritage with its refined artistry. The heart of this ensemble lies in the front-open pishwas, where meticulous embellishments glisten across its flowing silhouette, creating a sense of old-world romance. The tukri sleeves are a masterpiece, crafted with chatta patti accents that harken back to regal bridal traditions. Paired with a brocade farshi gharara, lovingly adorned with intricate zardozi handwork, every motif portrays finesse. The luxuriously hand-embellished dupatta comes with detailed four borders, paying homage to our time-honored techniques. Draped magnificently, it tells a tale of romance and enduring beauty.",
    "fabric": {
      "Shirt": "Pure Khaddi Silk",
      "Sharara": "Jamawar + Karandi",
      "Dupatta": "Tissue",
      "Pouch": "Pure Khaddi Silk"
    },
    "color": "Red",
    "pieces": "4 Pcs (Shirt + Sharara + Dupatta + Pouch)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "a-radiance-eternal-br-04",
    "group": "bridal",
    "name": "A Radiance Eternal (BR-04)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/11_7c96fbac-9a6d-4dee-8636-6d869557fb9d.jpg?v=1752765060&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/9_f19b7b78-7bc4-4586-9e54-f3f6dc7c076d.jpg?v=1752765060&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/10_9dc37ddd-6457-4511-bb3d-ecb639e7fb4d.jpg?v=1752765060&width=1000"
    ],
    "description": "Wrapped in hues of vermilion red, this regal farshi bridal ensemble tells a tale of legacy and classic grandeur. Crafted with an heirloom spirit, its majestic silhouette flows with grace, adorned in intricate zardozi handwork. Paired with an exquisitely embellished shirt, the ensemble elevates elegance with a neckline that gently accentuates the bride’s poise. The graceful, scalloped dupatta, delicately embellished and edged with love, drapes softly over the shoulder, glimmering like whispers of gold, lending a celestial aura to the entire look. The detailed adornments make this a timeless bridal outfit, offering tradition in each thread.",
    "fabric": {
      "Shirt": "Pure Khaddi Silk",
      "Lehnga": "Pure Raw Silk",
      "Dupatta": "Pure Khaddi Silk",
      "Pouch": "Pure Khaddi Silk"
    },
    "color": "Red",
    "pieces": "5 Pcs (Shirt + Lehnga + Dupatta +Veil+ Pouch)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "a-whisper-of-dreams-br-02",
    "group": "bridal",
    "name": "A Whisper of Dreams (BR-02)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_a2cc0890-cae0-455e-b892-48fbd7c98ba0.jpg?v=1752764466&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_64fdfae4-89f4-4634-b81b-d94f43836817.jpg?v=1758045057&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_12a9310b-b735-40a1-8b0a-459080be16c8.jpg?v=1758045057&width=1000"
    ],
    "description": "A vision of delicate poetry, this three-piece bridal ensemble is a celebration of timelessness and exquisite craftsmanship. Rendered in a soft mint hue, the brocade lehnga evokes a sense of serene elegance, with its delicate silver handwork, gently uplifted by subtle touches of peach and nude pink embroideries. Paired with a beautiful shirt that portrays a canvas of floral artistry, each detail is brought to life through premium handwork of zardozi, mokaish, and fine French knots. A masterpiece. The ethereal sheer net sleeves' embellishments appear as though they were delicately painted onto the skin. The dupatta completes the story with grandeur as it is heavily adorned entirely, while its head area outshines with a layout of jewel-like embellishment. Ethereal and exquisite with each detail, this bridal ensemble promises to make your day feel truly unforgettable.",
    "fabric": {
      "Peshwas": "Net",
      "Lehnga": "Brocade",
      "Dupatta": "Net",
      "Pouch": "Jama war"
    },
    "color": "Mint",
    "pieces": "4 Pcs (Shirt + Lehnga + Dupatta + Pouch)",
    "dispatch": "12 weeks after Order Confirmation"
  },
  {
    "id": "grand-champagne-bridal-gown-br-01",
    "group": "bridal",
    "name": "Grand Champagne Bridal Gown (BR-01)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_1730eeec-321b-4465-bfbd-5d24f046814d.jpg?v=1739367478&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/10_26041c72-7136-4a96-b75d-1f9eb0b05a7f.jpg?v=1739367478&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8_ba14397b-93c3-433f-b8d2-3b1d6a934fb3.jpg?v=1739367478&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_f1faf767-be06-47a0-b439-831e69be73e2.jpg?v=1739367478&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_480a37d2-8476-48b8-8571-a9b9c00d20e0.jpg?v=1739367478&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_5b4dfef9-54a5-4c16-acfa-1959c2217553.jpg?v=1739367478&width=1000"
    ],
    "description": "This mesmerizing Champagne gold and silver reception bridal becomes a canvas of dreams. The heavily embellished peshwas is an intricate pattern of gorgeous zardozi and fine resham craftsmanship. An ivory tulle dupatta with fully worked borders in 'ganga-jamni' and a trailing brocade lehnga with rich borders complete this grand and majestic bridal look. Every inch of this dreamy creation is hand worked to perfection. Fit for a modern day princess. Color:Champagne and Ivory"
  },
  {
    "id": "reception-bridal-gown-and-veil-br-11",
    "group": "bridal",
    "name": "Reception Bridal Gown and Veil (BR-11)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_7366cc70-c77b-4a09-ba9d-1796dac2e65b.jpg?v=1739367473&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_a4c401c9-74f8-42bb-9cb0-28283a466a7b.jpg?v=1739367473&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_6661f605-7d00-44df-a51b-ac9f645c6a9b.jpg?v=1739367473&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_84015932-28da-49e5-8ca0-6e8d42837555.jpg?v=1739367473&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_19b3e6b8-b1c6-4ba3-9990-d40932416478.jpg?v=1739367473&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_a3377e1e-2f1b-4922-9083-37ce9e3af7fc.jpg?v=1739367473&width=1000"
    ],
    "description": "Magical and simply exquisite bridal couture by AMMARA KHAN. Our brand new signature veil comes with cascading florals and dainty scallops running along the borders. Delicate vines are crafted using fine crystals and bead work with striking resham embroidery and cover the entire length of the gown in an artistic pattern on the front and back. Sheer net sleeves with beautiful hand work add a touch of femininity.The perfect outfit for a Reception bride. Timeless and ethereal.Color:Mint and soft Blues"
  },
  {
    "id": "ak24-br-09",
    "group": "bridal",
    "name": "Maroon and Antique gold farshi gharara set (BR-09)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_25af9867-3401-4285-a850-0e95460de821.jpg?v=1739367439&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_050561ef-0eba-4074-b400-83aec76fb23d.jpg?v=1739367439&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_9cc28c65-b0d9-464e-9849-7106f949decb.jpg?v=1739367440&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_79ec79a9-4677-485f-a7d5-42786d5e7869.jpg?v=1739367440&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_6e4778aa-6031-4321-8475-5d9edd74a4af.jpg?v=1739367440&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8_b3451dcd-f221-4da6-b625-177709b092c5.jpg?v=1739367440&width=1000"
    ],
    "description": "A stunning and timeless design for the bride who loves an antique gold aura with a beautiful and deep maroon pallette. A fully hand embellished shirt is covered with fine zardozi work with sequins and thread work. A two-legged, pure jamawar farshi gharara is covered with delicate vines and florals in tilla work and zarodozi with a touch of crystals. A fine silk tissue dupatta with a full scalloped border, and an addtional jaal on the head area completes this majestic bridal dress. Sure to be the perfect choice for the traditional bride.",
    "color": "Deep Maroon and Gold"
  },
  {
    "id": "ak24-br-10",
    "group": "bridal",
    "name": "Rust and Gold Lehnga Choli Bridal (BR-10)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_15ebdf28-a7db-4f72-ba80-4c1e628dfffc.jpg?v=1739367438&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_b0cdc151-ae5c-4cec-86ec-9e5a0009a0b0.jpg?v=1739367438&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_4d8c4467-ca77-452a-90ce-69c1d0498631.jpg?v=1739367438&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_a02a6ff9-007d-40dc-aae7-825837353579.jpg?v=1739367438&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_a11e41bf-0d94-4349-8759-0649b849dfee.jpg?v=1739367438&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_ec39c2a5-8f9c-4c64-8f39-549e2c0a68f2.jpg?v=1739367438&width=1000"
    ],
    "description": "An immaculate vision of grandeur comes to life in this design which exudes an old world charm. Finely crafted flora and fauna cover the lehnga with intricate zardozi work with touches of rust resham. Hints of gilded golden 'succha' gota add further beauty to this regal design. The zari net dupatta is hand dyed to a gorgeous rust colour with heavily embellished borders all around. Fine dapka and resham work enhance the beauty alongwith an all over hand made flower booti. The choli is covered in a full jaal with beautiful flowers and delicate leaves crafted in fine dapka and resham, with fine sequins to add a sheen. Gorgeous and timeless, a truly AMMARA KHAN in the regal sensibility.",
    "color": "Dupatta: Rust, Lehnga & Choli: Rusted Gold"
  },
  {
    "id": "akb24-br-04-r",
    "group": "bridal",
    "name": "Classic Red Gharara Bridal (BR-04-R)",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_53559e1c-8939-49a2-863f-928fdf92f67b.jpg?v=1739367442&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_f2d72cb7-daa3-40b8-bfe8-adf37cbb971b.jpg?v=1739367442&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_4fd35361-fcdd-41bf-9585-b40a2994da1e.jpg?v=1739367442&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_998a5c0a-aa21-47e8-92db-0b5bce480b37.jpg?v=1739367442&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_11aaed41-01be-4ba1-83dd-41aff5ab7288.jpg?v=1739367443&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_94fc4510-7e4f-44e8-b605-5232420107dd.jpg?v=1739367443&width=1000"
    ],
    "description": "A classic AMMARA KHAN red, created into an old worldly gharara and kameez, with exquisite gold zardozi and resham handwork. The dupatta is adorned with beautiful and bold scalloped borders with heavily embellished pallus with a resham chatta patti. Hours and hours of intricately crafted worksmanship by our artisans are behind each bridal creation. Traditional glamour defines this stunning masterpiece in the most perfect shade of deep red.",
    "color": "Deep Red"
  },
  {
    "id": "midnight-gilded-glam-d-01",
    "group": "luxury",
    "name": "Midnight Gilded Glam (D-01)",
    "price": "Rs. 195,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/24.webp?v=1768561389&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/25.webp?v=1768561389&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/30.webp?v=1768561588&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/26.webp?v=1768561588&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/27.webp?v=1768561588&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/29.webp?v=1768561443&width=1000"
    ],
    "sizes": [
      "XS / Without Dupatta",
      "XS / With Dupatta",
      "S / Without Dupatta",
      "S / With Dupatta",
      "M / Without Dupatta",
      "M / With Dupatta",
      "L / Without Dupatta",
      "L / With Dupatta",
      "XL / Without Dupatta",
      "XL / With Dupatta"
    ],
    "description": "A statement black slim fit silhouette with an exquisite all over heavily embellished pattern in a mix of florals and geometrics. Statement sleeves and an asymmetrical neckline add to the 'oomph' of this look. Sequins, crystals and beads add a luster to this design and crushed flared pants complete the look. Be sure to stun at your next event in 'KARA'.",
    "fabric": {
      "Shirt": "Net",
      "Trouser": "Blended Raw Silk",
      "Dupatta (Optional)": "Net dupatta with finishing on four sides"
    },
    "color": "Black",
    "pieces": "2 Pcs (Shirt + Trouser)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "silver-siren-d-01",
    "group": "luxury",
    "name": "Silver Siren (D-01)",
    "price": "Rs. 195,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/32copy.webp?v=1768561836&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/30copy.webp?v=1768561836&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/31copy.webp?v=1768561836&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/27copy.webp?v=1768561836&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A silver grey ensemble adorned with intricate hand embellishment using crystals, sequins, and thread-work. The flowing silhouette features a cape-style overlay that adds drama and elegance. The delicate floral pattern and textural detailing elevate the overall design. The outfit is paired with wide-leg pants, richly detailed with ornate embellishment. Dazzling, dramatic, and undeniably show-stopping, a true jewel of the KARA collection.",
    "fabric": {
      "Shirt": "Net",
      "Pants": "Blended Raw Silk"
    },
    "color": "Silver Grey",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "crimson-deep-berry-d-02",
    "group": "luxury",
    "name": "Crimson Deep Berry (D-02)",
    "price": "Rs. 175,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4copy.webp?v=1768561948&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1copy.webp?v=1768561948&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3copy.webp?v=1768561948&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2copy.webp?v=1768561948&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A statement of refined luxury, this masterpiece by AMMARA KHAN is designed to dazzle. The long, sleek silhouette is richly adorned with intricate embellishment, featuring sequins, beads, and crystals forming ornate leafy motifs across the front and sleeves. The high halter neckline is delicately framed with detailed handwork, adding a refined finish. The elongated sheer sleeves drape gracefully at the sides, creating a dramatic yet elegant effect. The outfit is paired with wide-leg pants featuring an embellished hem, exuding sophistication and grandeur, perfect for formal celebrations.",
    "fabric": {
      "Shirt": "Blended Net",
      "Pants": "Blended Raw Silk"
    },
    "color": "Deep Berry",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "golden-sand-dune-d-03",
    "group": "luxury",
    "name": "Golden Sand Dune (D-03)",
    "price": "Rs. 195,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/13copy.webp?v=1768562020&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/14copy.webp?v=1768562020&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/15copy.webp?v=1768562020&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/17copy.webp?v=1768562043&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/16copy.webp?v=1768562043&width=1000"
    ],
    "sizes": [
      "XS / Without Dupatta",
      "XS / With Dupatta",
      "S / Without Dupatta",
      "S / With Dupatta",
      "M / Without Dupatta",
      "M / With Dupatta",
      "L / Without Dupatta",
      "L / With Dupatta",
      "XL / Without Dupatta",
      "XL / With Dupatta"
    ],
    "description": "This exquisite floor-length shirt in a soft beige tone showcases elaborate bead and sequin embroidery on a sheer overlay, creating a luxurious effect. Intricate floral and leafy motifs extend across the front, back and flared sleeves. The elegant boat neckline is framed with delicate embellishment, adding a refined finish. The look is completed with crushed wide-leg pants, bringing graceful movement and modern charm to this statement piece from KARA collection.",
    "fabric": {
      "Shirt": "Blended Net",
      "Pants": "Blended Raw Silk",
      "Dupatta (Optional)": "Net dupatta with finishing on four sides"
    },
    "color": "Beige Gold",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "celestial-pearl-d-04",
    "group": "luxury",
    "name": "Celestial Pearl (D-04)",
    "price": "Rs. 175,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/28copy.webp?v=1768562184&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/26copy.webp?v=1768562184&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/25copy.webp?v=1768562196&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/24copy.webp?v=1768562196&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/29copy.webp?v=1768562184&width=1000"
    ],
    "sizes": [
      "XS / Without Dupatta",
      "XS / With Dupatta",
      "S / Without Dupatta",
      "S / With Dupatta",
      "M / Without Dupatta",
      "M / With Dupatta",
      "L / Without Dupatta",
      "L / With Dupatta",
      "XL / Without Dupatta",
      "XL / With Dupatta"
    ],
    "description": "A dreamy white ensemble that radiates refined glamour and modern grace. At its heart is a front-open long shirt in an elegant, flowing silhouette. It is richly hand-embellished with crystals, beads, sequins and pearls across the front and sleeves. Underneath, a finely tailored inner blouse enhances the look’s intricate detailing. It is paired with elegant wide-leg pants adorned with delicate pearl and crystal accents along the hem for a subtle yet refined finish. Sheer sleeves add a touch of drama, and the embroidery’s delicate sparkle exudes timeless elegance. A signature AMMARA KHAN creation, this piece embodies the sophistication of KARA.",
    "fabric": {
      "Shirt": "Blended Net",
      "Pants": "Blended Raw Silk",
      "Slip": "Blended Silk",
      "Dupatta (Optional)": "Net dupatta with finishing on four sides"
    },
    "color": "White",
    "pieces": "3pcs (Shirt + Pants + Slip)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "citrine-glow-d-05",
    "group": "luxury",
    "name": "Citrine Glow (D-05)",
    "price": "Rs. 175,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/22copy.webp?v=1768562347&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/21copy.webp?v=1768562347&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/23copy.webp?v=1768562347&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/20copy.webp?v=1768562347&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/19copy.webp?v=1768562314&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "This AMMARA KHAN creation embodies refined elegance with a contemporary twist. A fluid, embellished drape cascades gracefully from one sleeve, while the other shimmers with intricate handwork. The silhouette flows effortlessly in a straight, floor-length cut, paired with wide-leg pants that move elegantly with every step. A high neckline with delicate shoulder cut-outs adds a modern touch and beautifully frames the intricately adorned bodice. The hemline glistens with refined detailing, completing the look with understated opulence.",
    "fabric": {
      "Shirt": "Blended Net",
      "Pants": "Blended Raw Silk"
    },
    "color": "Lime Yellow",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "midnight-muse-d-06",
    "group": "luxury",
    "name": "Midnight Muse (D-06)",
    "price": "Rs. 175,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_6.jpg?v=1762321544&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/38_086e8197-382b-4d9c-9949-a60247fe47d2.jpg?v=1762511088&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_3_f5ad4dd5-1500-405d-8e56-fa4a1845ab0c.jpg?v=1762511088&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_4_b60abb3f-c291-4b94-8ba3-204e16c311d8.jpg?v=1762511088&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_2_ccdf1f94-de55-471a-b3f6-541cad59d04b.jpg?v=1762511088&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_5.jpg?v=1762511088&width=1000"
    ],
    "sizes": [
      "XS / Without Dupatta",
      "XS / With Dupatta",
      "S / Without Dupatta",
      "S / With Dupatta",
      "M / Without Dupatta",
      "M / With Dupatta",
      "L / Without Dupatta",
      "L / With Dupatta",
      "XL / Without Dupatta",
      "XL / With Dupatta"
    ],
    "description": "Turn heads in this stunning midnight blue ensemble from AMMARA KHAN’s ‘KARA’ collection. This striking creation features a long shirt with a plunging V-shaped neckline. It is layered over a separate embellished blouse with a high, halter-inspired neckline adorned with intricate bead and sequin detailing. Exquisite embroidery and ornate embellishments run seamlessly across the shirt, while flared sleeves with sheer accents lend an ethereal elegance. Paired with tailored pants featuring a delicately worked border, this ensemble is the epitome of refined glamour, perfect for making a statement at any special occasion.",
    "fabric": {
      "Shirt": "Net",
      "Pants": "Blended Raw Silk",
      "Blouse": "Blended Raw Silk",
      "Dupatta (Optional)": "Net dupatta with finishing on four sides"
    },
    "color": "Midnight Blue",
    "pieces": "3pcs (Shirt + Pants + Blouse)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "golden-noir-d-08",
    "group": "luxury",
    "name": "Golden Noir (D-08)",
    "price": "Rs. 175,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8copy.webp?v=1768562603&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7copy.webp?v=1768562603&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6copy.webp?v=1768562603&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5copy.webp?v=1768562603&width=1000"
    ],
    "sizes": [
      "XS / Without Dupatta",
      "XS / With Dupatta",
      "S / Without Dupatta",
      "S / With Dupatta",
      "M / Without Dupatta",
      "M / With Dupatta",
      "L / Without Dupatta",
      "L / With Dupatta",
      "XL / Without Dupatta",
      "XL / With Dupatta"
    ],
    "description": "AMMARA KHAN presents a striking black creation, drenched in the opulence of intricate gold embellishments. The long, structured silhouette flows gracefully, paired with crushed wide-leg trousers that add effortless movement. This outfit also includes a matching blouse underneath. Rich embroidery weaves across the shirt, with ornate motifs enhancing the neckline and sleeves. Full-length sleeves finish in richly embellished cuffs, highlighted with sequins and beads that add a luminous shimmer. A statement piece of sophistication and artistry, this ensemble exudes pure luxury.",
    "fabric": {
      "Shirt": "Blended Raw Silk",
      "Pants": "Blended Raw Silk",
      "Blouse": "Blended Raw Silk",
      "Dupatta (Optional)": "Net dupatta with finishing on four sides"
    },
    "color": "Black",
    "pieces": "3pcs (Shirt + Pants + Blouse)",
    "dispatch": "6 to 8 weeks from Order Confirmation"
  },
  {
    "id": "the-ivory-muse-d-02",
    "group": "demi",
    "name": "The Ivory Muse (D-02)",
    "price": "Rs. 945,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_5_6fc7c272-aba1-4ab5-b932-0c0427c5709d.webp?v=1789725155&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_3_f4f180c3-45e9-4831-8185-4462e3f2c90f.webp?v=1789725156&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_6_c173e94f-5fcf-4b60-87a3-b92b028859bd.webp?v=1789725155&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_1_8c5b76bd-5948-4e1f-83ff-291bd4becbb2.webp?v=1789725155&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_2_8789c69e-79da-479c-bf67-a5eea7a0b348.webp?v=1789725155&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_4_40bc3056-347d-4930-ad9c-b8e06026f6b4.webp?v=1789725156&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An exquisite bridal featuring intricate embroidery in antique gold, accented with delicate blush, dusty rose and lilac tones, enhanced with refined detailing. The intricately worked peshwas showcases a beautifully embellished bodice, ornate sleeves and cascading embroidery, with a front-open cut line that creates an elongating silhouette. 'Chatta-patti' colour play on the ghera adds an old-worldly charm to this gorgeous bridal. Paired with a richly woven brocade lehenga, the ensemble is completed with a sheer ivory organza dupatta featuring an intricately worked border and a delicate all-over spray of sequins. A refined expression of bridal elegance, designed for the AMMARA KHAN bride.",
    "fabric": {
      "Peshwas": "Net",
      "Lehenga": "Jamawar",
      "Dupatta": "Organza"
    },
    "color": "Ivory",
    "pieces": "3pcs (Peshwas + Lehenga + Dupatta)",
    "dispatch": "8 weeks from Order Confirmation"
  },
  {
    "id": "the-coral-bloom-d-03",
    "group": "demi",
    "name": "The Coral Bloom (D-03)",
    "price": "Rs. 755,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_5_6fc8976b-c4b5-4255-bd68-8dc6cb027368.webp?v=1789728730&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_4_74114295-9e35-4285-a16e-756065d0b8d5.webp?v=1789728730&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_1_df924c20-66a5-4664-a907-28253b7b6ff1.webp?v=1789728730&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_3_5e1d3d8d-2b9c-45c6-b83a-459bf71c48e1.webp?v=1789728730&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_2_0269ad67-ad69-4188-856e-fa1e04f4daaa.webp?v=1789728730&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_6_a259f35f-ed6e-4434-ac06-53752733763d.webp?v=1789728730&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A coral bridal set, densely embroidered with multicolour embellishments in gold, pink and green tones, enriched with beads, sequins and resham work that brings warmth and depth to the overall look. The peshwas features a heavily embellished front-open cut line and full sleeves, adorned with rich embroidered “Chatta Patti” borders that flow elegantly to the ground. A delicate interplay of colours and old-world charm. Paired with a delicate coral net dupatta with fully embellished borders, this ensemble is a refined expression of bridal elegance.",
    "fabric": {
      "Peshwas": "Net",
      "Lehenga": "Jamawar",
      "Dupatta": "Net"
    },
    "color": "Coral",
    "pieces": "3pcs (Peshwas + Lehenga + Dupatta)",
    "dispatch": "8 weeks from Order Confirmation"
  },
  {
    "id": "gilded-nikah-bridal-d-06",
    "group": "demi",
    "name": "Gilded Nikah Bridal (D-06)",
    "price": "Rs. 680,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_7.webp?v=1789726752&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_6.webp?v=1789726752&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_3_4b7e926f-2642-4685-9588-27cb5b12b409.webp?v=1789726752&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_1_52dfd223-8679-4a9d-87e8-feaf63c2b83d.webp?v=1789726752&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_2_7ebf9f9a-e3f5-4501-b1c3-8c86fdec4b5d.webp?v=1789726752&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_5.webp?v=1789726752&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect Nikkah Bridal, richly embroidered in gold with all-over floral motifs created in zardozi and sequins work, that catches the light with every movement. The peshwas features a heavily embellished neckline and sleeves, falling into a graceful, flowing silhouette. The brocade lehnga hem is elevated with a statement lappa border in shimmering gold and silver tones. Layered with a sheer ivory net dupatta, finished with a kiran-edged border and fine gold sequin embroidery. The look is perfect for the bride who embraces the richness of traditional adornment.",
    "fabric": {
      "Peshwas": "Net",
      "Lehenga": "Jamawar",
      "Dupatta": "Net"
    },
    "color": "Ivory",
    "pieces": "3pcs (Peshwas + Lehenga + Dupatta)",
    "dispatch": "8 weeks from Order Confirmation"
  },
  {
    "id": "monochrome-grandeur-d-05",
    "group": "demi",
    "name": "Monochrome Grandeur (D-05)",
    "price": "Rs. 235,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_9.jpg?v=1739367562&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_5.jpg?v=1739367562&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_6.jpg?v=1739367562&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_6.jpg?v=1739367563&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_4.jpg?v=1739367563&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "AMMARA KHAN's classic monochrome peshwas is heavily embroidered in a custom designed pattern with a heavily embellished bodice and sleeves with fine French knots and sequins. It is beautiful and ever so unique. Touches of black resham taanka in the panels add further detail. An embroidered border on the lehnga and an exquisite dupatta with all over floral embroidery completes the look. Effortless and sophisticated, this big ghair silhouette is artistic in its majesty. A piece to cherish forever and sure to make a grand statement when worn.",
    "fabric": {
      "Peshwas": "NetDupatta: NetGhagra: Blended Silk"
    },
    "color": "Monochrome",
    "pieces": "3 Pc (Peshwas + Dupatta + Ghagra)",
    "dispatch": "9 to 10 weeks after Order Confirmation"
  },
  {
    "id": "moonbeam-fairy-d-6-jade",
    "group": "demi",
    "name": "Moonbeam Fairy (D-06)",
    "price": "Rs. 275,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_ba4c515c-aada-4c75-9a50-ce51bc7c9978.jpg?v=1739367447&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8_07a5c219-55a2-4973-9708-3cba8f924c61.jpg?v=1739367447&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_c5ee0cdb-8b23-4291-bda9-9f9c21281f7f.jpg?v=1739367447&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_6f707e90-d7d4-42de-a710-45f544e2b3f9.jpg?v=1739367448&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_0b1b288a-d4aa-4d65-b186-1b9edbaaacd1.jpg?v=1739367448&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_c8559cc3-cd1d-4b6d-8e49-f1ca518d1063.jpg?v=1739367448&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Nikah perfection via this glorious, heavily embroidered design. An artistic composition of floral imagery is used to create the panels with a fully hand embellished bodice and sleeves. The dupatta is simply beautiful with a scalloped and fully embellished border along the front length with a scattering of embroidered flowers all over. The lehnga has a fully embroidered border with sequins to complete the look. Classic and magical this is AMMARA KHAN couture at its feminine best.",
    "fabric": {
      "Peshwas": "NetDupatta: NetLehnga: Korean Raw Silk"
    },
    "color": "Pearl",
    "pieces": "3 Pc (Peshwas + Dupatta + Lehnga)",
    "dispatch": "8 to 9 weeks after Order Confirmation"
  },
  {
    "id": "golden-sunset-d-09",
    "group": "demi",
    "name": "Golden Sunset (D-09)",
    "price": "Rs. 400,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_10.jpg?v=1739367556&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_7.jpg?v=1739367556&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_7.jpg?v=1739367556&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_8.jpg?v=1739367556&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_6.jpg?v=1739367556&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Peach and Gold Kalidar Peshwas with ornate all over hand embellishment, with hues of coral resham and zardozi all over the panels, sleeves, bodice and neckline. It comes with a net dupatta with an intricate hand worked border and a rich brocade lehnga with delicate embellishment on the ends. An inner brocade blouse adds richness. The perfect outfit for those looking to make a grand yet elegant statement at their Nikah or engagement.",
    "fabric": {
      "Peshwas": "NetDupatta: NetLehnga: Jamawar"
    },
    "color": "Peachy Gold",
    "pieces": "3 Pc (Peshwas+ Dupatta + Lehnga)",
    "dispatch": "9 to 10 weeks after Order Confirmation"
  },
  {
    "id": "silver-dreams-d-10",
    "group": "demi",
    "name": "Silver Dreams (D-10)",
    "price": "Rs. 627,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_bb64252d-9088-451b-91cd-06f49e0f45d3.jpg?v=1739367555&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_5fd15663-78c8-487c-a8e5-fe48a25cad7b.jpg?v=1739367555&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_53df991c-25d3-4ece-bb46-3e54ce4eb287.jpg?v=1739367555&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_38b0efd7-50f2-4581-a5db-7750390b5e94.jpg?v=1739367555&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_b2a218b3-cdc8-4dce-9d0e-876ec8914945.jpg?v=1739367555&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An exquisite bridal dress with our signature intricate embellishment in tones of silver and gold with minty resham touches and a generous sparkle of crystals, beads and sequins. A sweetheart neckline accentuates the femininity of this beautiful peshwas with sheer net sleeves to further beautify. An ivory organza dupatta with a front worked border and all over spray is ever so pretty, as is the brocade lehnga and inner bodice lining. Perfect for the contemporary classic AMMARA KHAN bride.",
    "fabric": {
      "Peshwas": "Net",
      "Dupatta": "Organza",
      "Lehnga": "Jamawar"
    },
    "color": "Mint",
    "pieces": "3 Pc (Peshwas + Dupatta + Lehnga)",
    "dispatch": "9 to 10 weeks from Order Confirmation"
  },
  {
    "id": "starry-mirage-kaftan-d-15",
    "group": "kaftan",
    "name": "Starry Mirage Kaftan (D-15)",
    "price": "Rs. 74,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp?v=1769689040&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/69_ca902f2f-8181-497d-bab5-28f8eed61b32.webp?v=1769689040&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/68_f4dbd237-1c3a-49bd-b657-feb44d2a19e2.webp?v=1769689040&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/70_749c2ed4-a22a-451a-9d2e-13b582d253cc.webp?v=1769689040&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "This gorgeous kaftan by AMMARA KHAN features a flowing silhouette detailed with sparkling crystal hand embellishments. The design includes fine geometric and floral embroidery throughout, with a neckline accented with signature beading. It is designed with statement sleeves and lightly adorned cuffs for a glam look. This ensemble comes with an inner slip and is paired with straight pants to provide a graceful, effortless fit for evening festivities.",
    "fabric": {
      "Kaftan": "Blended Chiffon",
      "Slip": "Blended Silk",
      "Pants": "Blended Silk"
    },
    "color": "Grey",
    "pieces": "3pcs (Kaftan + Pants + Slip)",
    "dispatch": "3 to 4 weeks from Order Confirmation"
  },
  {
    "id": "multi-tassel-black-kaftan-d-01",
    "group": "kaftan",
    "name": "Multi Tassel Black Kaftan (D-01)",
    "price": "Rs. 49,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_086330aa-6d05-4865-ad47-0b25349e66e9.jpg?v=1739367469&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_deefaee0-552d-4105-971a-1698fd702ca3.jpg?v=1739367469&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_e76f488f-a22a-48d0-a61a-10c9044114d3.jpg?v=1739367469&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_0e8069f4-62a5-46ab-b3a1-c5be6140ef2d.jpg?v=1739367469&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_79711e77-eb8c-4c16-9c72-15fef8606625.jpg?v=1739367469&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Black is never a let down and this stunning kaftan tunic with multi tassel detailing on the ends is just Wow! The ghera neckline and sleeves are highlighted with our exquisite hand embellishment in shades of gold. The flowy cut lends an aura of sophistication to this unique design. AK prints and our luxe hand made details are sure to set you apart in inimitable style.",
    "fabric": {
      "Shirt": "Blended Raw Silk",
      "Pants": "Blended Raw Silk"
    },
    "color": "Black",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 to 4 weeks from Order Confirmation"
  },
  {
    "id": "festive-orange-kaftan-d-03",
    "group": "kaftan",
    "name": "Festive Orange Kaftan (D-03)",
    "price": "Rs. 55,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_19002564-d52c-44b7-9f13-faa799597608.jpg?v=1739367488&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_ea6bf9fe-4e0e-4edb-84c5-8d4fe59c51bd.jpg?v=1739367488&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_82e1bba6-17dd-4c44-b240-21b260a05d84.jpg?v=1739367488&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_a69cd28c-c5cd-44ae-9e0a-f0d7ffb6e5b3.jpg?v=1739367488&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_9f99d34e-c7d5-41ed-93a4-c815555f43ce.jpg?v=1739367488&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_f3c741de-b1f6-43f7-85c6-f7da2b07b6ac.jpg?v=1739367488&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An elegant silhouette that's as easy to wear as it is to style , this Kaftan by AMMARA KHAN will quickly become your go-to festive staple. The beautifully worked neckline compliments the subtle print with elegant borders and sleeve embellishment detailing. The bright tangerine colour with pops of blue makes it a perfect choice for a Mehndi celebration. Just the right amount of traditional blended with contemporary cool.",
    "fabric": {
      "Shirt": "Blended Raw Silk",
      "Pants": "Blended Raw Silk"
    },
    "color": "Orange",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 to 4 weeks from Order Confirmation"
  },
  {
    "id": "garnet-reverie-kaftan-d-01",
    "group": "kaftan",
    "name": "Garnet Reverie Kaftan (D-01)",
    "price": "Rs. 95,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_1_7f1d3be6-351f-4248-a508-6fb9dc264e5a.webp?v=1792044164&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_4_3bba394b-1b4e-46b2-900d-e4602c6f15bb.webp?v=1792044164&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_2_d230734c-4121-4fbe-a83a-e6eedbec1b69.webp?v=1792044164&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_3_0d5fa10a-1231-4947-8c0d-d790e6d2cae4.webp?v=1792044164&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_5_0d0fa9ee-c420-4433-93b6-bee05bc5edec.webp?v=1792044164&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A rich garnet hue sets the tone for this AMMARA KHAN kaftan, crafted in sumptuous velvet with an elegant, flowing silhouette. The defining feature lies in its sheer detail sleeves, adorned with elaborate gold and silver toned work. Ornamental patterns extend along the sleeves, culminating in a richly embellished look that brings depth and distinction to the design. The contrast between the plush velvet body and the intricately worked sleeves lends the ensemble a striking finish, suited to sophisticated evenings.",
    "fabric": {
      "Shirt": "Velvet",
      "Pants": "Raw Silk"
    },
    "color": "Garnet",
    "pieces": "2Pcs (Kaftan +Pant)",
    "dispatch": "5 to 6 weeks from Order Confirmation"
  },
  {
    "id": "velvet-rouge-kaftan-d-04",
    "group": "kaftan",
    "name": "Velvet Rouge Kaftan (D-04)",
    "price": "Rs. 115,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-04_2_393008a7-68de-49f0-95fc-ad5ae8ed0a1b.webp?v=1792046057&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-04_3_29d0efb3-a6d2-4cd0-9a8d-3b6139dedef7.webp?v=1792046057&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-04_5_14b7c28b-1c21-4342-949a-b0af05bf8bd0.webp?v=1792046057&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-04_4_6ecc127e-7f72-494f-bff8-e431e951f537.webp?v=1792046057&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-04_1_ac4b2e45-1444-49a5-b596-31003b067659.webp?v=1792046057&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An elaborate red velvet kaftan by AMMARA KHAN, defined by intricate gold-toned hand embellishment and a striking elongated silhouette. The deep V-neckline is framed with ornate craftsmanship that extends into decorative motifs at the front, a trail of delicate embroidered patterns cascading down the length of the kaftan. The wide sleeves are accented with matching detailing, complementing the fluid fall of the velvet. A statement of refined artistry and signature AK opulence, this ensemble is ideal for wedding festivities and formal occasions.",
    "fabric": {
      "Kaftan": "Velvet"
    },
    "color": "Deep Red",
    "pieces": "1 Pc (Kaftan)",
    "dispatch": "5 to 6 weeks from Order Confirmation"
  },
  {
    "id": "floral-noir-velvet-kaftan-d-05",
    "group": "kaftan",
    "name": "Floral Noir Velvet Kaftan (D-05)",
    "price": "Rs. 115,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_2_91bce424-70a4-4992-974d-740921713d8c.webp?v=1792046397&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_3_2457fd7d-4fa5-46fa-8682-52e66ac62690.webp?v=1792046397&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_5_f6590ce7-f095-42fc-8e15-b72694914013.webp?v=1792046397&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_4_2b0388ea-98c6-4619-a85a-7a6723b5fd65.webp?v=1792046397&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_1_06f38ab9-9c29-4917-8f22-d6cb4a3d2150.webp?v=1792046398&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Rich velvet meets intricate floral artistry in this striking black kaftan by AMMARA KHAN. The flowing silhouette is adorned with delicate floral and leafy resham embroidery in soft pink and green hues, accented with refined pearl detailing and shimmering sequins. The side slits show a hint of skin to an overall modest look. A graceful neckline adds definition to the silhouette, creating a sophisticated balance of opulent detailing and effortless movement, best for evening soirees.",
    "fabric": {
      "Kaftan": "Velvet"
    },
    "color": "Black",
    "pieces": "1 Pc (Kaftan)",
    "dispatch": "5 to 6 weeks from Order Confirmation"
  },
  {
    "id": "gilded-plum-kaftan-d-06",
    "group": "kaftan",
    "name": "Gilded Plum Kaftan (D-06)",
    "price": "Rs. 95,000",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_2_7a46a856-c94f-47ce-8602-877d8408cf14.webp?v=1792046664&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_5_0e8898d7-395b-4585-8e37-a85939d91a9e.webp?v=1792046664&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_1_c4c03ba2-84d2-4bcf-8520-61801f3bfb8e.webp?v=1792046664&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_3_1410c341-b3eb-4afd-aaa8-baeeeaae5b02.webp?v=1792046664&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_4_aa965df8-60cd-4319-955d-d799dfe098c8.webp?v=1792046664&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "AMMARA KHAN presents a striking plum velvet kaftan, distinguished by ornate gold-toned embroidery and a graceful, elongated silhouette. The neckline & sleeves are outlined with decorative sequin hand embellishment. Coordinating details adorn the wide sleeves, with delicately worked borders completing the design. The side slit is enhanced with fine resham embroidery adding definition to the silhouette. The lustrous velvet lends depth to the deep plum hue, while the gold embroidery adds a regal finish, making this kaftan an elegant choice for wedding celebrations and grand soirées.",
    "fabric": {
      "Kaftan": "Velvet"
    },
    "color": "Plum Wine",
    "pieces": "1 Pc (Kaftan)",
    "dispatch": "5 to 6 weeks from Order Confirmation"
  },
  {
    "id": "floral-hush-d-07",
    "group": "prints",
    "name": "Floral Hush (D-07)",
    "price": "Rs. 13,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_5.webp?v=1777536463&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/15_copy_97133b5f-03b9-4950-a4d4-6454c16f6710.webp?v=1780397006&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/13_copy_3a12fdfd-161b-4b04-b721-4e63bef1354b.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_1.webp?v=1777536463&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/16_copy.png?v=1780397015&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_3.webp?v=1777536463&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Turn heads with this statement 2-piece AMMARA KHAN printed lawn set, designed in a rich black palette. The loose-cut shirt features a round neckline with a tie-up detail, accented by vibrant floral tassels. The design is further elevated by intricate white lace finishing on the sleeves and a unique botanical print. Paired with a multi-colored printed dupatta, this look blends sophistication with contrast, perfect from sunlit afternoons to evening gatherings.",
    "fabric": {
      "Shirt": "Lawn",
      "Dupatta": "Blended Chiffon"
    },
    "color": "Black",
    "pieces": "2pcs (Shirt + Dupatta)",
    "dispatch": "3 to 5 working days after Order Confirmation"
  },
  {
    "id": "candy-peach-classic-d-01",
    "group": "prints",
    "name": "Candy Peach Classic (D-01)",
    "price": "Rs. 15,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_1.webp?v=1777536098&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_copy_ffe6d22b-8bbd-4d4a-af98-3ce14a1289d8.webp?v=1780398355&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_copy_08bc6ac3-d750-405f-a884-0d70a0f2f559.webp?v=1780398355&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_3.webp?v=1777536099&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_copy_e99c8bb1-dd27-4326-b712-70c7c17eec5b.webp?v=1780398355&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-01_2.webp?v=1777536098&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Experience the charm of the season with this 3-piece AMMARA KHAN printed lawn set, designed in a peachy rose tone. The straight shirt features a round neckline with a V-notch, white lace finishing, and a prominent white floral appliqué patched on the front for added texture. Paired with matching printed pants and a printed chiffon dupatta, the outfit is detailed with delicate crochet lace on the sleeves and a subtle green botanical print on the dupatta. This ensemble offers a polished, breezy look that is ideal for daytime dressing.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric",
      "Dupatta": "Blended Chiffon"
    },
    "color": "Rose Peach",
    "pieces": "3pcs (Shirt + Pants + Dupatta)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "whimsy-wisteria-d-02",
    "group": "prints",
    "name": "Whimsy Wisteria (D-02)",
    "price": "Rs. 12,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_3.webp?v=1777536198&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/4_copy_72559d4e-8238-4015-99f5-d5d0604518fb.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_copy.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_2.webp?v=1777536198&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/5_copy.webp?v=1780397006&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_1.webp?v=1777536198&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Radiate fresh summertime vibes with this AMMARA KHAN printed lawn set, draped in a refreshing aqua blue palette. This ensemble features a short-length straight shirt paired with matching printed pants, creating a playful and coordinated look. The shirt is designed with a round neckline, finished with a delicate tie-up detail and white lace, adding a soft touch. Statement puff sleeves accented with delicate white lace inset panel bring a graceful charm, while pastel florals across the cool blue base lend a vibrant appeal, perfect for daytime celebrations.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric"
    },
    "color": "Aqua Blue",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "viola-d-03",
    "group": "prints",
    "name": "Viola (D-03)",
    "price": "Rs. 11,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03.webp?v=1777535641&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/8_copy_ae96fd09-142b-495e-a36a-f2d59d90e63e.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/9_copy_155bbb87-eba7-4346-ab70-e5c9a4101d5b.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_2.webp?v=1777535641&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/12_copy_f37675cd-da9b-49ef-aa7a-100f895c6505.webp?v=1780397005&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-03_1.webp?v=1777535641&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Embrace the blooming beauty with this summery AMMARA KHAN lawn shirt, draped in a dreamy lilac palette. This ensemble features an A-line, loose fit printed shirt and white straight-fit pants, creating a seamless blend of classic comfort and contemporary style. The shirt is elevated by a split neckline with a white lace placket and a standout floral lace appliqué on the shoulder, offering a unique, handcrafted feel.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric"
    },
    "color": "Lilac",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "lacy-blues-d-05",
    "group": "prints",
    "name": "Lacy Blues (D-05)",
    "price": "Rs. 15,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/website_3.webp?v=1784738767&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/26_5f723566-c6fa-4ba3-bcb1-299a7fb23741.png?v=1788956142&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/21_71da82c7-091a-47d5-9f1b-83d6d1ff7fd6.png?v=1788956143&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_1_0273f4ad-2bc1-4aec-8b7c-7629617da99d.webp?v=1784705793&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-05_3_5073048e-0626-45fc-b91f-87a2a71aaf0e.webp?v=1784705793&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/18_d56f7af8-683c-473a-9a0a-015d561ccd68.png?v=1788956141&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Radiate a fresh energy with this AMMARA KHAN printed lawn set, presented in a lovely blue palette. The ensemble features a long shirt paired with white lovely pants and a vibrant, multi-colored printed dupatta. The shirt is highlighted by a standout white lace collar and a decorative lace placket that adds a bright, textural contrast against the deep blue base. Subtle yellow and green botanical illustrations bloom across the fabric, while the look is finished with delicate lace on the sleeves and pants hems. This ensemble offers a sophisticated aesthetic, perfect for the airy feel of any daytime summer occasion.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric",
      "Dupatta": "Blended Chiffon"
    },
    "color": "Blue",
    "pieces": "3pcs (Shirt + Pants + Dupatta)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "tulips-lemonade-d-06",
    "group": "prints",
    "name": "Tulips & Lemonade (D-06)",
    "price": "Rs. 11,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_3_4f5ac0bf-775f-462b-bdeb-b2988bc125d1.webp?v=1784705853&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/7_91d9ff15-00f9-4c46-a6fc-07694eabb4d7.png?v=1788955891&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_13e182a3-f5be-4460-b7a5-84dfe9159e9f.png?v=1788955891&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_1_895e1222-b0d4-4e36-8216-e3ac3e486101.webp?v=1784705853&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-06_2_7184e792-a334-4f43-8a16-8259a1eea2e5.webp?v=1784705853&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/6_81533901-dc94-453e-9f34-13466271e21d.png?v=1788955891&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Bring a soft glow to your summer wardrobe with this AMMARA KHAN printed lawn set, featuring a light lime green and pastel yellow palette. The ensemble consists of a long-length straight shirt paired with white pants. The shirt is defined by a unique ruffled high collar and a delicate white lace that extends across the shoulders. Delicate sleeves with gathered cuffs and a garden of pink and purple tulips blooming across the base enhance its cheerful aesthetic. Finished with a breezy silhouette, this set is a perfect choice for feel good factor.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric"
    },
    "color": "Lime Green",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "sweet-berry-d-08",
    "group": "prints",
    "name": "Sweet Berry (D-08)",
    "price": "Rs. 15,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-08_6.webp?v=1784705895&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/14_473e6a77-5945-4586-9839-9de869d4c1bb.png?v=1788955536&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/9_99924285-2535-444d-8f78-99af93708062.png?v=1788955537&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-08_1_19797a69-1de3-45dc-a9d8-59da9b691872.webp?v=1784705895&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-08_3_a968228f-687a-4af9-9826-5e9e7044baba.webp?v=1784705895&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/15_f4c55fc7-f6b9-445f-b91c-f43440c1282b.png?v=1788955536&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Brighten your summer wardrobe with this AMMARA KHAN 3-piece printed lawn set, featuring a vibrant pink palette. The ensemble consists of a straight-cut shirt paired with white pants and a contrasting light mint green printed dupatta. The shirt is defined by a split V- neckline with a wide lace collar and matching lace borders at the hem, creating a fresh look. Unique puff sleeves with lace-trimmed cuffs add a modern touch. Finished with delicate lace at the pants hems, this set is a perfect choice.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric",
      "Dupatta": "Blended Chiffon"
    },
    "color": "Pink",
    "pieces": "3pcs (Shirt + Pants + Dupatta)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "iris-d-09",
    "group": "prints",
    "name": "Iris (D-09)",
    "price": "Rs. 11,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_2_43567cc4-7416-42f1-aad4-48e07c4c7243.webp?v=1784705974&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/25.png?v=1788954469&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/22_a38fa8fc-d775-44bb-8a0a-27962adcd319.png?v=1788954468&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_3_9f06c6ff-6f8a-4254-972c-7a9d75c19ace.webp?v=1784705974&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_4_1155bea6-c336-4eb8-a951-8d863541714b.webp?v=1784705974&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/23.png?v=1788954469&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "This printed lawn set is designed in a cool lilac grey palette, featuring a straight-cut shirt paired with matching wide-leg printed pants. The shirt is defined by a mandarin-style collar, framed by refined white lace. Statement puff sleeves with gathered volume and delicate lace-trimmed cuffs add a modern flair, while the dramatic purple iris and verdant green illustrations create a striking, contemporary aesthetic for the season.",
    "fabric": {
      "Shirt": "Lawn",
      "Pants": "Cambric"
    },
    "color": "Grey-Lilac",
    "pieces": "2pcs (Shirt + Pants)",
    "dispatch": "3 working days after Order Confirmation"
  },
  {
    "id": "shahana-d-06",
    "group": "readytowear",
    "name": "Shahana (D-06)",
    "price": "Rs. 54,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/72_a2c405c7-8032-4324-a2a5-389a851ecc6a.webp?v=1769689033&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/54_copy.webp?v=1780385142&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/56_copy.webp?v=1780385142&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/73_e5536ee7-6eea-49eb-a346-00ca932fb424.webp?v=1769689032&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/53_copy.webp?v=1780385142&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/75_c9d2d5d2-aae4-4c90-adaf-e124cb3c4bb3.webp?v=1769689032&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "This turquoise three-piece kaftan set features a long silhouette with wide sleeves and a multicolored rich Eastern-inspired print. The front and neckline are hand-embellished with pearls, sequins, and bead work in ornate patterns, while the sleeves are finished with printed borders. The ensemble includes matching straight pants and a crushed dupatta in a deep contrasting color. Rich in colour and detailed craftsmanship, this ensemble is a striking choice for elevated Eid and celebratory occasions.",
    "fabric": {
      "Kaftan": "Blended Silk",
      "Pants": "Blended Silk",
      "Dupatta": "Silk Blend"
    },
    "color": "Turquoise Blue",
    "pieces": "3pcs (Shirt + Pants + Dupatta)",
    "dispatch": "4 to 5 weeks from Order Confirmation"
  },
  {
    "id": "peach-shimmer-set-d-08",
    "group": "readytowear",
    "name": "Peach Shimmer (D-08)",
    "price": "Rs. 69,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_2_6b41ea23-aa1d-40ff-af91-bc0b5bba95e2.webp?v=1783582402&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/14_2276d000-c2ea-48c6-848e-0767566effe2.png?v=1783688214&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/18_7aa1f28a-4623-4ca4-a4c6-3c5fdbe5a0ef.png?v=1783688214&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_4_058f16b4-77ee-4f5e-b38f-b7bf8ce247a2.webp?v=1783582402&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-07_5_b0c9bad8-2f66-4975-97c7-1c50f4820518.webp?v=1783582401&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/17_445e3819-5f96-4274-aeff-87d5e8a5eb65.png?v=1783688214&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An expression of femininity, this AMMARA KHAN ensemble is adorned with refined hand embellishments in a soft peach-pink hue and is composed of a fully embroidered fabric with sequins. The peplum silhouette is beautifully tailored, while the statement neckline is exquisitely embellished with floral embroidery, crystals, pearls, and delicate bead-work. The sleeves are finished with refined cut-work and embellishments, showcasing fine craftsmanship. Paired with a matching wide piancha shalwar featuring embellished hems and a coordinating dupatta, this ensemble embodies classic elegance and refined sophistication.",
    "fabric": {
      "Shirt": "Khaddi Net",
      "Pants": "Blended Silk",
      "Dupatta": "Khaddi Net",
      "Slip": "Blended Raw Silk"
    },
    "color": "Peachy Pink",
    "pieces": "4pcs (Shirt + Pants + Slip + Dupatta)",
    "dispatch": "4 to 5 weeks from Order Confirmation"
  },
  {
    "id": "serfina-tassel-kaftan-d-06",
    "group": "readytowear",
    "name": "Serfina (D-06)",
    "price": "Rs. 74,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_2.webp?v=1783581951&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/20_141bb38f-81aa-434e-b57f-d095954039cb.png?v=1783687816&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/21.png?v=1783687816&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_4.webp?v=1783581952&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/22.png?v=1783687816&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-09_1.webp?v=1783581951&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Delicate tassel accents bring movement and charm to this AMMARA KHAN kaftan set, presented in a sophisticated taupe-beige hue. The flowing silhouette is enhanced with lace detailing along the front. The neckline is adorned with hand embellishments and detailed cut-work. Voluminous sleeves with layered flounces create a soft, fluid look and add a statement touch. Paired with matching pants, this ensemble embodies understated glamour and modern elegance.",
    "fabric": {
      "Kaftan": "Blended Silk",
      "Pants": "Blended Raw Silk"
    },
    "color": "Taupe-beige",
    "pieces": "2pcs (Kaftan + Pants)",
    "dispatch": "4 to 5 weeks from Order Confirmation"
  },
  {
    "id": "rosalie-d-01",
    "group": "readytowear",
    "name": "Rosalie (D-01)",
    "price": "Rs. 54,950",
    "soldOut": false,
    "images": [
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_1_9f647fd6-6bfb-41c7-9162-47e6532d88d4.webp?v=1783579472&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/1_ddd7d6e8-c0b4-482f-a289-66376d29040a.png?v=1783688028&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/2_c04de4e5-3f2e-4b62-bb9e-98f545602734.png?v=1783688028&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_3_454c4c20-90ed-4ef7-a339-627ff66037de.webp?v=1783579472&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/3_c9753f86-3415-4c0f-807b-78b3726c4995.png?v=1783688028&width=1000",
      "https://cdn.shopify.com/s/files/1/2402/3147/files/D-02_2_6529a22d-e5e8-4305-be6b-d234b234ad5b.webp?v=1783579472&width=1000"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Rendered in a fresh aqua blue palette, this AMMARA KHAN printed kaftan is brought to life with vibrant floral and scenic prints. The flowing silhouette falls effortlessly, creating a relaxed yet elegant look. The neckline is adorned with detailed hand embellishments featuring sequins, beads, and crystals for a touch of sparkle. The sleeves are enhanced with delicate embroidery. Paired with straight pants, this ensemble defines contemporary sophistication.",
    "fabric": {
      "Kaftan": "Blended Silk",
      "Pants": "Blended Raw Silk"
    },
    "color": "Aqua",
    "pieces": "2pcs (Kaftan + Pants)",
    "dispatch": "4 to 5 weeks from Order Confirmation"
  }
];

// 3D models (.glb) for the "3D VIEW" button: product id -> file in public/models/
// Example: 'veil-of-dawn-br-05': '/models/veil-of-dawn.glb'
const models3d = {
};

export const products = Object.fromEntries(
  productList.map(p => [p.id, {
    sizes: SIZES,
    soldOut: false,
    fabric: {},
    collection: collectionLabels[p.group],
    price: bridalPlaceholderPrice,
    ...groupDefaults[p.group],
    ...p,
    model3d: models3d[p.id] || null,
  }])
);

export const collections = {
  "bridal": {
    "title": "Bridal Couture",
    "productIds": [
      "veil-of-dawn-br-05",
      "the-gold-whisper-br-06",
      "a-royal-symphony-br-07",
      "blush-reverie-br-01",
      "the-scarlet-heirloom-br-03",
      "a-radiance-eternal-br-04",
      "a-whisper-of-dreams-br-02",
      "grand-champagne-bridal-gown-br-01",
      "reception-bridal-gown-and-veil-br-11",
      "ak24-br-09",
      "ak24-br-10",
      "akb24-br-04-r"
    ]
  },
  "luxury": {
    "title": "Luxury Formals",
    "productIds": [
      "midnight-gilded-glam-d-01",
      "silver-siren-d-01",
      "crimson-deep-berry-d-02",
      "golden-sand-dune-d-03",
      "celestial-pearl-d-04",
      "citrine-glow-d-05",
      "midnight-muse-d-06",
      "golden-noir-d-08"
    ]
  },
  "demi": {
    "title": "Demi Couture",
    "productIds": [
      "the-ivory-muse-d-02",
      "the-coral-bloom-d-03",
      "gilded-nikah-bridal-d-06",
      "monochrome-grandeur-d-05",
      "moonbeam-fairy-d-6-jade",
      "golden-sunset-d-09",
      "silver-dreams-d-10"
    ]
  },
  "kaftan": {
    "title": "AK Kaftan",
    "productIds": [
      "starry-mirage-kaftan-d-15",
      "multi-tassel-black-kaftan-d-01",
      "festive-orange-kaftan-d-03",
      "garnet-reverie-kaftan-d-01",
      "velvet-rouge-kaftan-d-04",
      "floral-noir-velvet-kaftan-d-05",
      "gilded-plum-kaftan-d-06"
    ]
  },
  "prints": {
    "title": "Luxury Prints",
    "productIds": [
      "floral-hush-d-07",
      "candy-peach-classic-d-01",
      "whimsy-wisteria-d-02",
      "viola-d-03",
      "lacy-blues-d-05",
      "tulips-lemonade-d-06",
      "sweet-berry-d-08",
      "iris-d-09"
    ]
  },
  "newarrivals": {
    "title": "New Arrivals",
    "productIds": [
      "the-ivory-muse-d-02",
      "the-coral-bloom-d-03",
      "gilded-nikah-bridal-d-06",
      "floral-hush-d-07",
      "candy-peach-classic-d-01",
      "whimsy-wisteria-d-02",
      "viola-d-03",
      "starry-mirage-kaftan-d-15"
    ]
  },
  "bestsellers": {
    "title": "Best Sellers",
    "productIds": [
      "starry-mirage-kaftan-d-15",
      "shahana-d-06",
      "midnight-gilded-glam-d-01",
      "multi-tassel-black-kaftan-d-01",
      "peach-shimmer-set-d-08",
      "serfina-tassel-kaftan-d-06",
      "rosalie-d-01",
      "iris-d-09"
    ]
  }
};

export function getCollectionProducts(key) {
  return (collections[key]?.productIds || []).map(id => products[id]);
}

// Other products from the same collection, topped up with best sellers
export function getRecommended(product, count = 4) {
  const own = collections[product.group]?.productIds || [];
  const ids = [...own, ...collections.bestsellers.productIds];
  return [...new Set(ids)]
    .filter(id => id !== product.id)
    .slice(0, count)
    .map(id => products[id]);
}
