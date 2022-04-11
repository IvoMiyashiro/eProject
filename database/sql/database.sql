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

/* Specs */

CREATE TABLE IF NOT EXISTS specs_gpu (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  category_id VARCHAR(100) NOT NULL,
  product_id VARCHAR(100) NOT NULL,
  brand VARCHAR(100),
  series VARCHAr(100),
  model VARCHAR(100),
  interface VARCHAR(100),
  chipset_manufactor VARCHAR(100),
  gpu VARCHAR(100),
  cuda_cores INT,
  effective_memory_clock VARCHAR(100),
  memory_size VARCHAR(100),
  memory_interface VARCHAR(100),
  memory_type VARCHAR(100),
  multi_monitor_support INT,
  hdmi VARCHAR(100),
  display_port VARCHAR(100),
  max_resolution VARCHAR(100),
  cooler VARCHAR(100),
  thermal_design_power VARCHAR(100),
  power_connector VARCHAR(100),
  max_length VARCHAR(100),
  dimentions VARCHAR(100),
  CONSTRAINT fk_category_id
  FOREIGN KEY(category_id)
  REFERENCES category(id)
  ON DELETE CASCADE
);

ALTER TABLE IF EXISTS specs_gpu ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE;

/* Specs */

/* User */

CREATE TYPE user_roles AS ENUM('admin', 'client');

CREATE TABLE IF NOT EXISTS customer (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  profile_image VARCHAR(2048),
  role user_roles
);

/* User */

/* Review */

CREATE TABLE IF NOT EXISTS review (
  id VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
  customer_id VARCHAR(100),
  product_id VARCHAR(100),
  rating INT,
  title VARCHAR(100),
  pros TEXT,
  cons TEXT,
  overall TEXT,
  likes INT,
  dislikes INT,
  created_at DATE,
  CONSTRAINT fk_user_id
  FOREIGN KEY(customer_id)
  REFERENCES customer(id)
  ON DELETE CASCADE
);

ALTER TABLE IF EXISTS review ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE;

/* Review */