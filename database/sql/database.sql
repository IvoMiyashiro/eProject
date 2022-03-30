/* Products Brands */

CREATE TABLE IF NOT EXISTS brand (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  brand_name VARCHAR(80) NOT NULL UNIQUE
);

/* Products Brands */

/* Product Category */

CREATE TABLE IF NOT EXISTS category (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  category_name VARCHAR(80) NOT NULL UNIQUE
);

/* Product Category */

/* Product Table */

CREATE TABLE IF NOT EXISTS product (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  price INT NOT NULL DEFAULT 0,
  discount_price INT NOT NULL DEFAULT 0,
  description TEXT,
  stock INT NOT NULL DEFAULT 0,
  category VARCHAR(100),
  brand VARCHAR(100),
  image_urls VARCHAR(2048)[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_brand_name
  FOREIGN KEY(brand)
  REFERENCES brand(brand_name)
  ON DELETE CASCADE
);

ALTER TABLE IF EXISTS product ADD CONSTRAINT fk_category_name FOREIGN KEY (category) REFERENCES category(category_name) ON DELETE CASCADE;

/* Product Table */

/* Images for Products */

-- CREATE TABLE IF NOT EXISTS image_url (
--   id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
--   product_id VARCHAR(100),
--   image_url VARCHAR(2048) NOT NULL DEFAULT '',
--   CONSTRAINT fk_product_id
--   FOREIGN KEY(product_id)
--   REFERENCES product(id)
--   ON DELETE CASCADE
-- );

/* Images for Products */
