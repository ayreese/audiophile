import { InformationEvent } from "http";

export interface Welcome {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: ProductResults;
}

export interface GetProductResults {
  info: Meta;
  results: ProductResults[];
}

export interface ProductResults {
  name: string;
  price: number;
  quantity: number | null;
  description: string;
  features: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  additionalFeatures: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
