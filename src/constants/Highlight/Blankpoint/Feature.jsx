const featureIcons = [
  "📊", // Dashboard
  "🛒", // POS
  "💼", // Finance
  "📦", // Product
  "🔗", // Supplier/Customer
  "👤", // User/Role
];

export const FeatureConst = (lang) => [
  {
    title: "Realtime Dashboard & Insight",
    icon: featureIcons[0],
    description:
      lang === "en"
        ? "Presents data that is easy to understand in real time, neatly and accurately. This helps business owners easily gain insights."
        : "Menyajikan data yang mudah dipahami secara realtime, rapi dan akurat. Sehingga sangat mudah dipahami oleh pemilik bisnis.",
  },
  {
    title: "Point of Sales",
    icon: featureIcons[1],
    description:
      lang === "en"
        ? "Cashier feature built into the app with fast checkout and multipayment support such as cash, transfer, and credit."
        : "Fitur penjualan kasir langsung di dalam aplikasi yang cepat dengan fitur multipayment seperti tunai, transfer & utang.",
  },
  {
    title: "Finance Management",
    icon: featureIcons[2],
    description:
      lang === "en"
        ? "Manage expenses and income based on customizable charts created by the user."
        : "Mengelola pengeluaran dan pendapatan berdasarkan bagan yang dibuat oleh user sendiri secara custom.",
  },
  {
    title: "Product Management",
    icon: featureIcons[3],
    description:
      lang === "en"
        ? "Manage main products and split them into retail products with separate stock management."
        : "Kelola produk induk dan pecah produk menjadi eceran yang stock nya bisa diatur masing-masing.",
  },
  {
    title: "Supplier & Customer Management",
    icon: featureIcons[4],
    description:
      lang === "en"
        ? "Store supplier and customer data easily and neatly."
        : "Menyimpan data supplier dan customer dengan mudah dan rapi.",
  },
  {
    title: "User & Role Management",
    icon: featureIcons[5],
    description:
      lang === "en"
        ? "Manage user access permissions based on each user's role and responsibilities."
        : "Pengaturan hak akses setiap user berdasarkan role atau tupoksi masing-masing.",
  },
];
