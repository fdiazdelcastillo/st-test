import styles from "./Home.module.css";
import Image from "next/image";
import Globe from "./../components/ui/GlobeDemo";
import WobbleCard from "./../components/ui/WobbleCardDemo";
import Card from "./../components/ui/CardDemo";
import Tabs from "./../components/ui/TabsDemo";
import CardStackDemo from "@/components/ui/CardStackDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Globe />
      <WobbleCard />
      <div className={styles.cards}>
        <Card
          title="Website"
          description="Ideal for: Growing businesses that want to showcase their products or services
Includes:
- Design of 6 pages: Home, Catalog, Product/Service, Contact Us, Blog, Article
- UI refresh every 2 years
- Deployment (1 TB/month)
- AI Chat (1K queries/month)
Monthly price: $400
Annual price: $320/month (save 20%)"
        />
        <Card
          title="Web Catalog"
          description="Ideal for: Companies ready to sell online and manage orders
Includes:
- Design of 11 pages: Home, Catalog, Product/Service, Cart, Checkout, Login, Orders, Individual Order, Contact Us, Blog, Article
- UI refresh every 2 years
- Deployment (1 TB/month)
- AI Chat (1K queries/month)
Monthly price: $600
Annual price: $480/month (save 20%)"
        />
        <Card
          title="Web Store"
          description="Ideal for: Companies ready to sell online and manage orders
Includes:
- Design of 11 pages: Home, Catalog, Product/Service, Cart, Checkout, Login, Orders, Individual Order, Contact Us, Blog, Article
- UI refresh every 2 years
- Deployment (1 TB/month)
- AI Chat (1K queries/month)
Monthly price: $600
Annual price: $480/month (save 20%)"
        />
        <Card
          title="Mobile Store"
          description="Ideal for: Businesses focused on sales through mobile devices
Includes:
- Mobile interface with: Catalog, Product, Shopping Cart, Checkout, Login, Orders, Individual Order, Support Form
- Deployment (1 TB/month)
- UI refresh every 2 years
Monthly price: $1,000
Annual price: $800/month (save 20%)"
        />
        <Card
          title="Mobile & Web Store"
          description="Ideal for: Companies seeking a complete omnichannel solution
Includes:
- All Mobile Store services
- All Web Store services
- Seamless synchronization between platforms
Monthly price: $1,400
Annual price: $1,120/month (save 20%"
        />
        <Card
          title="AI Chat"
          description="Ideal for: Any business wanting to improve customer service 24/7
Includes:
- 1K Queries/month
- Contextualization based on Website/Knowledge Base
- Website Integration
Monthly price: $100
Annual price: $80/month (save 20%)"
        />
      </div>
      <Tabs />
      <CardStackDemo />
    </main>
  );
}
