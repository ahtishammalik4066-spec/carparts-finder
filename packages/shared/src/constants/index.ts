// ============================================
// PartFinder PK - Shared Constants
// ============================================

export const USER_ROLES = {
  ADMIN: "admin",
  SUPPLIER: "supplier",
  CUSTOMER: "customer",
} as const;

export const PART_CONDITIONS = {
  NEW: "new",
  USED: "used",
  REFURBISHED: "refurbished",
  GENUINE: "genuine",
  AFTERMARKET: "aftermarket",
} as const;

export const LISTING_STATUS = {
  PENDING: "pending",
  ACTIVE: "active",
  SOLD: "sold",
  INACTIVE: "inactive",
  REJECTED: "rejected",
} as const;

export const LEAD_STATUS = {
  NEW: "new",
  CONTACTED: "contacted",
  CONVERTED: "converted",
  CLOSED: "closed",
} as const;

export const CURRENCIES = {
  PKR: "PKR",
  USD: "USD",
} as const;

export const DEFAULT_CURRENCY = CURRENCIES.PKR;

export const API_PREFIX = "/api/v1";

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const WHATSAPP_BASE_URL = "https://wa.me";

export const PAKISTAN_CITIES = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Sargodha",
  "Bahawalpur",
  "Sukkur",
  "Larkana",
  "Abbottabad",
  "Mardan",
  "Sahiwal",
  "Okara",
  "Sheikhupura",
] as const;

export const COMMON_MAKES = [
  "Toyota",
  "Honda",
  "Suzuki",
  "Nissan",
  "Mitsubishi",
  "Hyundai",
  "Kia",
  "Daihatsu",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Ford",
  "Chevrolet",
  "Land Rover",
  "Mazda",
  "Subaru",
  "Isuzu",
  "MG",
  "Changan",
] as const;

export const COMMON_PARTS = [
  "Engine",
  "Transmission",
  "Brake Pads",
  "Brake Discs",
  "Clutch",
  "Radiator",
  "Alternator",
  "Starter Motor",
  "Battery",
  "Headlight",
  "Tail Light",
  "Bumper",
  "Hood",
  "Door",
  "Mirror",
  "Wheel Rim",
  "Tire",
  "Shock Absorber",
  "Suspension Arm",
  "Steering Rack",
  "Fuel Pump",
  "Fuel Injector",
  "Turbocharger",
  "Air Filter",
  "Oil Filter",
  "Spark Plug",
  "Timing Belt",
  "Water Pump",
  "AC Compressor",
  "Condenser",
] as const;