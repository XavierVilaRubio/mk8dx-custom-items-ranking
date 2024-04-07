DROP TABLE IF EXISTS custom_items;
CREATE TABLE IF NOT EXISTS custom_items (
  id integer PRIMARY KEY AUTOINCREMENT,
  title text NOT NULL,
  items text NOT NULL,
  banana as (items LIKE '%banana%') STORED,
  triple_banana as (items LIKE '%triple_banana%') STORED,
  green_shell as (items LIKE '%green_shell%') STORED,
  triple_green_shells as (items LIKE '%triple_green_shells%') STORED,
  red_shell as (items LIKE '%red_shell%') STORED,
  triple_red_shells as (items LIKE '%triple_red_shells%') STORED,
  spiny_shell as (items LIKE '%spiny_shell%') STORED,
  bob_omb as (items LIKE '%bob_omb%') STORED,
  mushroom as (items LIKE '%mushroom%') STORED,
  triple_mushroom as (items LIKE '%triple_mushroom%') STORED,
  golden_mushroom as (items LIKE '%golden_mushroom%') STORED,
  bullet_bill as (items LIKE '%bullet_bill%') STORED,
  blooper as (items LIKE '%blooper%') STORED,
  lightning_bolt as (items LIKE '%lightning_bolt%') STORED,
  star as (items LIKE '%star%') STORED,
  fire_flower as (items LIKE '%fire_flower%') STORED,
  boomerang_flower as (items LIKE '%boomerang_flower%') STORED,
  piranha_plant_pot as (items LIKE '%piranha_plant_pot%') STORED,
  super_horn as (items LIKE '%super_horn%') STORED,
  crazy8 as (items LIKE '%crazy8%') STORED,
  coin as (items LIKE '%coin%') STORED,
  boo as (items LIKE '%boo%') STORED,
  upvotes integer DEFAULT 0,
  downvotes integer DEFAULT 0,
  votes as (upvotes - downvotes) STORED
);
DROP TABLE IF EXISTS votes;
CREATE TABLE IF NOT EXISTS votes (
  custom_items_id integer NOT NULL,
  hashed_ip text NOT NULL,
  upvote boolean DEFAULT 1,
  unique (custom_items_id, hashed_ip)
);
INSERT INTO custom_items (title, items, upvotes, downvotes) VALUES ('Shell party 🐌', 'green_shell,triple_green_shells,red_shell,triple_red_shells,spiny_shell', 3, 1);
INSERT INTO custom_items (title, items, upvotes) VALUES ('McQueen 🚗⚡', 'mushroom,triple_mushroom,golden_mushroom,lightning_bolt,star,bullet_bill', 1);