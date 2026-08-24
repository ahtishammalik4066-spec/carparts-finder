import type { FastifyInstance } from "fastify";

import { authRoutes } from "../modules/auth/auth.routes";
import { userRoutes } from "../modules/users/users.routes";
import { supplierRoutes } from "../modules/suppliers/suppliers.routes";
import { vehicleRoutes } from "../modules/vehicles/vehicles.routes";
import { makeRoutes } from "../modules/makes/makes.routes";
import { modelRoutes } from "../modules/models/models.routes";
import { yearRoutes } from "../modules/years/years.routes";
import { partRoutes } from "../modules/parts/parts.routes";
import { listingRoutes } from "../modules/listings/listings.routes";
import { partRequestRoutes } from "../modules/part-requests/part-requests.routes";
import { leadRoutes } from "../modules/leads/leads.routes";
import { shopRoutes } from "../modules/shops/shops.routes";
import { blogRoutes } from "../modules/blog/blog.routes";
import { faqRoutes } from "../modules/faq/faq.routes";
import { contactRoutes } from "../modules/contact/contact.routes";

export async function registerRoutes(app: FastifyInstance, prefix: string) {
  await app.register(authRoutes, { prefix: `${prefix}/auth` });
  await app.register(userRoutes, { prefix: `${prefix}/users` });
  await app.register(supplierRoutes, { prefix: `${prefix}/suppliers` });
  await app.register(vehicleRoutes, { prefix: `${prefix}/vehicles` });
  await app.register(makeRoutes, { prefix: `${prefix}/makes` });
  await app.register(modelRoutes, { prefix: `${prefix}/models` });
  await app.register(yearRoutes, { prefix: `${prefix}/years` });
  await app.register(partRoutes, { prefix: `${prefix}/parts` });
  await app.register(listingRoutes, { prefix: `${prefix}/listings` });
  await app.register(partRequestRoutes, { prefix: `${prefix}/part-requests` });
  await app.register(leadRoutes, { prefix: `${prefix}/leads` });
  await app.register(shopRoutes, { prefix: `${prefix}/shops` });
  await app.register(blogRoutes, { prefix: `${prefix}/blog` });
  await app.register(faqRoutes, { prefix: `${prefix}/faq` });
  await app.register(contactRoutes, { prefix: `${prefix}/contact` });
}