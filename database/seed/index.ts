import { IGpuSpects } from './../../interfaces/specs';
import { IBrand, ICategory, IProduct } from 'interfaces';

interface SeedData {
  products: IProduct[];
  categories: ICategory[];
  brands: IBrand[];
  gpu_specs: IGpuSpects[];
}

export const initialData: SeedData = {
  products: [
    {
      id: '29f27c40-8888-481e-8601-d3d36af9ad07',
      title: 'GeForce RTX 3070 Ti FTW3 ULTRA GAMING Video Card, 08G-P5-3797-KL, 8GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate',
      price: 1100,
      discount_price: 800,
      description: `<ul><li>Real Boost Clock: 1860 MHz; Memory Detail: 8192MB GDDR6X.
        </li><li>Real-Time RAY TRACING in games for cutting-edge, hyper-realistic graphics.
        </li><li>Triple Fans + 9 iCX3 thermal sensors offer higher performance cooling and much quieter acoustic noise.
        </li><li>All-Metal Backplate &amp; Adjustable ARGB.</li></ul>`,
      stock: 10,
      category: 'Video Cards',
      brand: 'EVGA',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-550-V30.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-550-V23.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-550-V24.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-550-V27.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'a23eb9b4-30e9-4f4f-a0a8-93f146839a3b',
      title: 'Gaming GeForce RTX 3070 Ti 8GB GDDR6X PCI Express 4.0 ATX Video Card GV-N307TGAMING OC-8GD',
      price: 1100,
      discount_price: 800,
      description: '<ul><li>NVIDIA Ampere Streaming Multiprocessors</li><li>2nd Generation RT Cores</li><li>3rd Generation Tensor Cores</li><li>Powered by GeForce RTX 3070 Ti</li><li>Integrated with 8GB GDDR6X 256-bit memory interface</li><li>WINDFORCE 3X Cooling System with alternate spinning fans</li><li>RGB Fusion 2.0</li><li>Protection metal back plate</li><li>2 x HDMI 2.1, 2 x Display Port 1.4a</li><li>Core Clock: 1830 MHz</li></ul>',
      stock: 10,
      category: 'Video Cards',
      brand: 'Gigabyte',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-443-01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-443-09.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-443-06.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-443-04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '4aa07c3f-ae70-40cb-861c-55a7c60cddc2',
      title: 'Ventus GeForce RTX 3050 8GB GDDR6 PCI Express 4.0 Video Card RTX 3050 Ventus 2X 8G OC',
      price: 800,
      discount_price: 500,
      description: `<ul><li>8GB 128-Bit GDDR6 
        </li><li>1 x HDMI 2.1 3 x DisplayPort 1.4 
        </li><li>2560 CUDA Cores 
        </li><li>PCI Express 4.0</li></ul>`,
      stock: 10,
      category: 'Video Cards',
      brand: 'MSI',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-708-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-708-V08.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-708-V09.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-708-V02.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '2bb184e7-2c28-430a-b2ce-6dcbf7ccbdf3',
      title: 'Radeon RX 6700 XT Challenger D Gaming Graphic Card, 12GB GDDR6 VRAM, AMD RDNA2 (RX6700XT CLD 12G)',
      price: 1000,
      discount_price: 800,
      description: `<ul><li>12GB 192-Bit GDDR6 
        </li><li>1 x HDMI 2.1 3 x DisplayPort 1.4 
        </li><li>2560 Stream Processors 
        </li><li>PCI Express 4.0</li></ul>`,
      stock: 10,
      category: 'Video Cards',
      brand: 'ASRock',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-930-056-V07.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-930-056-V08.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-930-056-V06.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-930-056-V09.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '8254ad5c-17d9-447a-8e1c-563821db48f0',
      title: 'ASUS ROG Strix GeForce RTX 3060 12GB GDDR6 PCI Express 4.0 Video Card ROG-STRIX-RTX3060-O12G-V2-GAMING',
      price: 1100,
      discount_price: 800,
      description: `<ul><li>12GB 192-Bit GDDR6 
        </li><li>Boost Clock OC Mode: 1912 MHz</li><li>Gaming Mode: 1882 MHz 
        </li><li>2 x HDMI 2.1 3 x DisplayPort 1.4a 
        </li><li>3584 CUDA Cores 
        </li><li>PCI Express 4.0</li></ul>`,
      stock: 10,
      category: 'Video Cards',
      brand: 'Asus',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-522-V18.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-522-V14.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-522-V06.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-522-V11.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '7b1b2be8-732c-4750-b7c5-a75f00e2594f',
      title: 'AMD Ryzen 5 5600X - Ryzen 5 5000 Series Vermeer (Zen 3) 6-Core 3.7 GHz Socket AM4 65W Desktop Processor - 100-100000065BOX',
      price: 500,
      discount_price: 400,
      description: `<ul><li>7nm Vermeer (Zen 3) 65W 
      </li><li>32MB L3 Cache 
      </li><li>3MB L2 Cache 
      </li><li>Windows 11 Supported</li></ul>`,
      stock: 10,
      category: 'CPU / Processors',
      brand: 'Asus',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-666-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll60/A4P0S211027A7EB7.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A2W0S210105phmiS.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150R80KTD6.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '8254ad5c-17d9-447a-8e1c-563821db48f7',
      title: 'ASUS ROG Strix GeForce RTX 3060 12GB GDDR6 PCI Express 4.0 Video Card ROG-STRIX-RTX3060-O12G-V2-GAMING',
      price: 1100,
      discount_price: 800,
      description: `<ul><li>12GB 192-Bit GDDR6 
        </li><li>Boost Clock OC Mode: 1912 MHz</li><li>Gaming Mode: 1882 MHz 
        </li><li>2 x HDMI 2.1 3 x DisplayPort 1.4a 
        </li><li>3584 CUDA Cores 
        </li><li>PCI Express 4.0</li></ul>`,
      stock: 10,
      category: 'CPU / Processors',
      brand: 'AMD',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-664-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150RBMI5BC.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150RBMBY98.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150RBMSG0C.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '7b9e8bd6-f902-4254-a62c-f7094415ddc8',
      title: 'Intel Core i9-12900K - Core i9 12th Gen Alder Lake 16-Core (8P+8E) 3.2 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071512900K',
      price: 800,
      discount_price: 600,
      description: `<ul><li>Intel 7 Alder Lake Processor Base Power: 125W</li><li>Maximum Turbo Power: 241W 
      </li><li>30MB L3 Cache 
      </li><li>14MB L2 Cache 
      </li><li>Intel UHD Graphics 770 
      </li><li>Windows 11 Supported</li></ul>`,
      stock: 10,
      category: 'CPU / Processors',
      brand: 'Intel',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-339-05.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-339-07.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-339-08.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-339-06.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '8c9a6838-4a3e-4ecb-8044-e7e4d3dc8e15',
      title: 'Intel Core i7-12700K - Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071512700K',
      price: 800,
      discount_price: 600,
      description: `<ul><li>Intel 7 Alder Lake Processor Base Power: 125W</li><li>Maximum Turbo Power: 190W 
      </li><li>25MB L3 Cache 
      </li><li>12MB L2 Cache 
      </li><li>Intel UHD Graphics 770 
      </li><li>Windows 11 Supported</li></ul>`,
      stock: 10,
      category: 'CPU / Processors',
      brand: 'Intel',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-343-05.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-343-07.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-343-08.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-343-06.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '38b67ead-7f28-4588-b5c1-7e0913e1f3de',
      title: 'CORSAIR Vengeance RGB Pro 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Intel XMP 2.0 Desktop Memory Model CMW32GX4M2D3600C18',
      price: 300,
      discount_price: 200,
      description: `<ul><li>Dynamic Multi-Zone RGB Lighting: 10 Ultra-bright RGB LEDs per module.
        </li><li>Next Generation Software: Take control in CORSAIR iCUE software and synchronize lighting with other CORSAIR RGB products, including CPU coolers, keyboards and fans.
        </li><li>Custom Performance PCB: Provides the highest signal quality for the greatest level of performance and stability.
        </li><li>Tightly Screened Memory: Carefully screened ICs for extended overclocking potential.
        </li><li>Maximum Bandwidth and Tight Response Times: Optimized for peak performance on the latest Intel and AMD DDR4 motherboards.
        </li><li>No Wires Required: Requires no extra wires or cables for a clean and seamless install.
        </li><li>Maximum bandwidth and tight response time: Optimized on the latest AMD and Intel DDR4 motherboards.
        </li><li>Supports XMP 2.0: A single BIOS setting is all that's required to set your memory to its ideal performance settings, for for optimum performance.</li></ul>`,
      stock: 10,
      category: 'Memory',
      brand: 'Corsair',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-607-01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-607-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-607-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-607-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'bbb27778-e563-49c4-ac63-43e9b9efd53c',
      title: 'G.SKILL TridentZ RGB Series 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Intel XMP 2.0 Desktop Memory Model F4-3600C18D-32GTZR',
      price: 300,
      discount_price: 200,
      description: `<ul><li>DDR4 3600 (PC4 28800) 
      </li><li>Timing 18-22-22-42 
      </li><li>CAS Latency 18 
      </li><li>Voltage 1.35V</li></ul>`,
      stock: 10,
      category: 'Memory',
      brand: 'G.Skill',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-920-V01.jpg',
        'https://c1.neweggimages.com/ProductImage/20-232-920-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-920-V04.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-920-Z01.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '8c9a6838-4a3e-4ecb-8044-e7e4d3dc8e05',
      title: 'CORSAIR Vengeance LPX 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Intel XMP 2.0 Desktop Memory Model CMK16GX4M2B3200C16',
      price: 800,
      discount_price: 600,
      description: `<ul><li>DDR4 3200 (PC4 25600) 
      </li><li>Timing 16-18-18-36 
      </li><li>CAS Latency 16 
      </li><li>Voltage 1.35V</li></ul>`,
      stock: 10,
      category: 'Memory',
      brand: 'Corsair',
      image_urls: [
        'https://c1.neweggimages.com/ProductImage/20-233-859-01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/B6T5S2112220ETRHRA0.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-233-859-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-233-859-V02.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '8c9a6838-4a3e-4ecb-8044-e7e4d3dc8ef5',
      title: 'G.SKILL Ripjaws V Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Desktop Memory Model F4-3200C16D-16GVKB',
      price: 200,
      discount_price: 100,
      description: `<ul><li>DDR4 3200 (PC4 25600) 
      </li><li>Timing 16-18-18-38 
      </li><li>CAS Latency 16 
      </li><li>Voltage 1.35V</li></ul>`,
      stock: 10,
      category: 'Memory',
      brand: 'G.Skill',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-231-941-03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-231-941-05.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '81af332d-5b3e-4872-8efc-a386a6c399bc',
      title: 'ASUS AM4 TUF Gaming X570-Plus (Wi-Fi) ATX Motherboard with PCIe 4.0, Dual M.2, 12+2 with Dr. MOS Power Stage, HDMI, DP, SATA 6Gb/s, USB 3.2 Gen 2 and Aura Sync RGB Lighting',
      price: 500,
      discount_price: 300,
      description: `<ul><li>BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU 
      </li><li>AMD AM4 socket: Ready for 2nd and 3rd Gen AMD Ryzen processors to maximize connectivity and speed with up to two M.2 Drives, USB 3.2 Gen2 and AMD StoreMI
      </li><li>Enhanced Power Solution: Military-grade TUF components, ProCool socket and Digi+ VRM for maximum durability
      </li><li>Comprehensive Cooling: Active PCH heatsink, VRM heatsink, M.2 heatsink, hybrid fan headers and Fan Xpert 4
      </li><li>Next-Gen Connectivity: Dual PCIe 4.0 M.2 and USB 3.2 Gen 2 Type-A / Type-C
      </li><li>Gaming Networking: Exclusive Realtek L8200A Gigabit Ethernet, Intel 2x2 802.11 ac Wi-Fi with MU-MIMO support, Bluetooth 5.0, TUF LANGuard and TurboLAN technology
      </li><li>Realtek S1200A Codec: Features an unprecedented 108dB signal-to-noise ratio for the stereo line-out and a 103dB SNR for the line-in, providing pristine audio quality
      </li><li>Aura Sync RGB: Synchronize LED lighting with a vast portfolio of compatible PC gear, including addressable RGB strips</li></ul>`,
      stock: 10,
      category: 'Motherboard',
      brand: 'Asus',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-197-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-197-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-197-Z03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-197-Z04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '1b481e03-9f84-48e1-8e04-19f86f38958d',
      title: 'ASUS Prime Z690-P D4 LGA 1700 Intel 12th Gen ATX Motherboard- PCIe 5.0, DDR4, 14+1 Power Stages, 3x M.2, 2.5Gb LAN, V-M.2 e-key, Front Panel USB 3.2 Gen 1 USB Type-C, Thunderbolt 4 Support, Arua Sync',
      price: 550,
      discount_price: 350,
      description: `<ul><li>Intel LGA 1700 socket: Ready for 12th Gen Intel Core processors, support PCIe 5.0 and DDR4 and out of box Windows 11 ready
      </li><li>Enhanced Power Solution: 14+1 DrMOS, ProCool connector, alloy chokes and durable capacitors for stable power delivery
      </li><li>Comprehensive Cooling: Large VRM heatsink, flexible M.2 heatsink, PCH heatsink, hybrid fan headers and Fan Xpert 4
      </li><li>Boosted Memory Performance: ASUS OptiMem II proprietary trace layout allows memory kits to operate at higher frequencies with lower voltages to maximize system performance
      </li><li>Ultrafast Connectivity: PCIe 5.0, Realtek 2.5Gb Ethernet, V-M.2 e-key, USB 3.2 Gen2x2 Type-C, front panel USB 3.2 Gen 1 Type-C, Thunderbolt 4 header support
      </li><li>PC DIY Friendly: PCIe 5.0 Safeslot, Q-LED Code
      </li><li>All ASUS Z690 Motherboards designed with dual mounting holes compatible with both Intel LGA1700 and LGA1200 cooling brackets</li></ul>`,
      stock: 10,
      category: 'Motherboard',
      brand: 'Asus',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-511-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-511-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-511-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-511-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'd560ffdf-3d2c-486e-9de1-9a0e70e83826',
      title: 'MSI MPG X570 GAMING EDGE WIFI Gaming Motherboard AMD AM4 SATA 6Gb/s M.2 USB 3.2 Gen 2 HDMI ATX',
      price: 500,
      discount_price: 300,
      description: `<ul><li>AMD X570 
      </li><li>Support for 3rd Gen AMD Ryzen Processors and future AMD Ryzen processors with BIOS update 
      </li><li>3rd Gen AMD Ryzen Processors support DDR4 4400/ 4266/ 4133/ 4000/ 3866/ 3733/ 3600/ 3466/ 3200/ 3066/ 3000/ 2933/ 2800/ 2667 MHz by A-XMP OC MODE, and 3200/ 3066/ 3000/ 2933/ 2800/ 2667/ 2400/ 2133/ 1866 MHz by JEDEC</li><li>2nd Gen AMD Ryzen Processors, 1st and 2nd Gen AMD Ryzen with Radeon Vega Graphics Processors support DDR4 3466/ 3200/ 3066/ 3000/ 2933/ 2800/ 2667 MHz by A-XMP OC MODE, and 3200/ 3066/ 3000/ 2933/ 2800/ 2667/ 2400/ 2133/ 1866 MHz by JEDEC</li></ul>`,
      stock: 10,
      category: 'Motherboard',
      brand: 'Asus',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-261-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-261-V07.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-261-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-261-Z01.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'eb21c1a6-f878-47df-aa5d-e9e41163ae0f',
      title: 'LIAN LI PC-O11 Dynamic Black Tempered Glass on the Front and Left Side, Chassis Body SECC ATX Mid Tower Gaming Computer Case - PC-O11DX',
      price: 200,
      discount_price: 150,
      description: `<ul><li>Tempered Glass on the Front and Left Sides, Chassis Body SECC
      </li><li>2 x USB 3.0 / 1 x USB 3.1 Type-C / HD Audio Front Ports 
      </li><li>Support up to 6 SSD and 3 HDD</li></ul>`,
      stock: 10,
      category: 'Case',
      brand: 'Lian li',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-112-583-V21.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-112-583-V80.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-112-583-V25.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-112-583-V27.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'b4cd4145-3c8c-430c-9863-c5da620b6f45',
      title: 'Cooler Master MasterBox Q300L Micro ATX Tower w/ Magnetic Design Dust Filter, Transparent Acrylic Side Panel, Adjustable I/O & Fully Ventilated for Airflow, MCB-Q300L-KANN-S00',
      price: 100,
      discount_price: 65,
      description: `<ul><li>AMD X570 
      </li><li>Support for 3rd Gen AMD Ryzen Processors and future AMD Ryzen processors with BIOS update 
      </li><li>3rd Gen AMD Ryzen Processors support DDR4 4400/ 4266/ 4133/ 4000/ 3866/ 3733/ 3600/ 3466/ 3200/ 3066/ 3000/ 2933/ 2800/ 2667 MHz by A-XMP OC MODE, and 3200/ 3066/ 3000/ 2933/ 2800/ 2667/ 2400/ 2133/ 1866 MHz by JEDEC</li><li>2nd Gen AMD Ryzen Processors, 1st and 2nd Gen AMD Ryzen with Radeon Vega Graphics Processors support DDR4 3466/ 3200/ 3066/ 3000/ 2933/ 2800/ 2667 MHz by A-XMP OC MODE, and 3200/ 3066/ 3000/ 2933/ 2800/ 2667/ 2400/ 2133/ 1866 MHz by JEDEC</li></ul>`,
      stock: 10,
      category: 'Case',
      brand: 'Cooler Master',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-119-331-V12.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-119-331-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-119-331-V18.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-119-331-V83.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'd560ffdf-3d2c-486e-9de1-9a0e70e83827',
      title: 'Corsair iCUE 4000X RGB CC-9011205-WW White Steel / Plastic / Tempered Glass ATX Mid Tower Computer Case',
      price: 200,
      discount_price: 150,
      description: `<ul><li>Combining stylish tempered glass, customizable RGB lighting
      </li><li>Tempered Glass Side and Front Panels
      </li><li>CORSAIR RapidRoute Cable Management System
      </li><li>Three Included 120mm RGB Fans
      </li><li>Smart RGB Lighting out of the Box
      </li><li>A spacious interior fits up to 6x 120mm or 4x 140mm cooling fans
      </li><li>USB 3.1 Type-C Port, USB 3.0 port, and a combination audio/microphone jack
      </li><li>All the Storage You Need: Fits up to 2x SSDs and 2x HDDs.</li></ul>`,
      stock: 10,
      category: 'Case',
      brand: 'Corsair',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-139-158-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-139-158-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-139-158-V08.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/11-139-158-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'e6278057-8007-459c-9599-ddaeca9415a8',
      title: 'CORSAIR HX Series HX1000 CP-9020139-NA 1000 W ATX12V v2.4 / EPS12V 2.92 80 PLUS PLATINUM Certified Full Modular Power Supply',
      price: 400,
      discount_price: 300,
      description: `<ul><li>ATX12V v2.4 / EPS12V 2.92 
      </li><li>Full Modular 
      </li><li>80 PLUS PLATINUM Certified 
      </li><li>100 - 240 V 47 - 63 Hz 
      </li><li>Single +12V Rail Mode: +3.3V@25A, +5V@25A, +12V@83.3A, -12V@0.8A, +5VSB@3A</li></ul>`,
      stock: 10,
      category: 'Power Supply',
      brand: 'Corsair',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-204-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-204-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-204-V05.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-204-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '53eb947a-130c-4f7f-a6ed-b9e8809a9777',
      title: 'EVGA SuperNOVA P3 220-P3-1200-X1 1200W ATX12V / EPS12V 80 PLUS PLATINUM Certified Full Modular Active PFC Power Supply',
      price: 200,
      discount_price: 150,
      description: `<ul><li>Combining stylish tempered glass, customizable RGB lighting
      </li><li>Tempered Glass Side and Front Panels
      </li><li>CORSAIR RapidRoute Cable Management System
      </li><li>Three Included 120mm RGB Fans
      </li><li>Smart RGB Lighting out of the Box
      </li><li>A spacious interior fits up to 6x 120mm or 4x 140mm cooling fans
      </li><li>USB 3.1 Type-C Port, USB 3.0 port, and a combination audio/microphone jack
      </li><li>All the Storage You Need: Fits up to 2x SSDs and 2x HDDs.</li></ul>`,
      stock: 10,
      category: 'Power Supply',
      brand: 'EVGA',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-227-01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-227-04.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-227-V80.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-227-05.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '82d2f5bc-deca-4d0b-b3da-70c9bc242148',
      title: 'EVGA SuperNOVA 1000 G5, 80 Plus Gold 1000W, Fully Modular, Eco Mode with FDB Fan, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size, Power Supply 220-G5-1000-X1',
      price: 200,
      discount_price: 80,
      description: `<ul><li>80 PLUS Gold certified, with 91% efficiency or higher under typical loads
      </li><li>Fully Modular to reduce clutter and improve airflow
      </li><li>100% Japanese Capacitors, Active Clamp +DC-DC Converter design to improve 3.3V. / 5V. Stability
      </li><li>Fluid Dynamic Bearing Fan and EVGA ECO Mode for ultra-quiet operation and increased lifespan
      </li><li>10 Year Limited Warranty and unparalleled EVGA Customer Support</li></ul>`,
      stock: 10,
      category: 'Power Supply',
      brand: 'EVGA',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-160-Z01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-160-Z02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-160-Z03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-160-Z04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'b334e448-c842-44f7-ab78-9fb5267eba95',
      title: 'MSI MPG A750GF 750 W ATX 80 PLUS GOLD Certified Full Modular Active PFC Power Supply',
      price: 200,
      discount_price: 120,
      description: `<ul><li>ATX 
      </li><li>Full Modular 
      </li><li>80 PLUS GOLD Certified 
      </li><li>100 - 240 V 47 - 63 Hz 
      </li><li>+5V@22A, +3.3V@22A, +12VMBPH@25A, +12VCPU@25A, +12VVGA1@35A, +12VVGA2@35A, -12V@0.3A, +5VSB@2.5A</li></ul>`,
      stock: 10,
      category: 'Power Supply',
      brand: 'MSI',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-701-010-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-701-010-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-701-010-V80.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/17-701-010-V03.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    //
    {
      id: '12508b3f-3e10-4891-99ee-38647d6c6a2e',
      title: 'SAMSUNG 970 EVO PLUS M.2 2280 1TB PCIe Gen 3.0 x4, NVMe 1.3 V-NAND 3-bit MLC Internal Solid State Drive (SSD) MZ-V7S1T0B/AM',
      price: 200,
      discount_price: 150,
      description: `<ul><li>INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 970 EVO Plus SSD's NVMe interface (PCIe Gen 3.0 x4 NVMe 1.3) offers enhanced bandwidth, low latency, and power efficiency ideal for tech enthusiasts, high end gamers, and 4K &amp; 3D content designers
      </li><li>BREAKTHROUGH READ WRITE SPEEDS: Sequential read and write performance levels of up to 3,500 MB/s and 3,300 MB/s, respectively; Random Read (4KB, QD32): Up to 600,000 IOPS Random Read
      </li><li>PERFORMANCE OPTIMIZATION AND DATA SECURITY: Seamless cloning and file transfers with Samsung Magician Software, the ideal SSD management solution for performance optimization and data security with automatic firmware updates
      </li><li>SUPERIOR HEAT DISSIPATION: Samsung's Dynamic Thermal Guard automatically monitors and maintains optimal operating temperatures to minimize performance drops
      </li><li>600 TBW (Terabytes Written)</li></ul>`,
      stock: 10,
      category: 'Storage',
      brand: 'Samsung',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-743-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-743-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-743-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-743-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'b0a248d7-101c-436a-98f2-8ee192b678c5',
      title: 'Western Digital WD BLACK SN850 NVMe M.2 2280 2TB PCI-Express 4.0 x4 3D NAND Internal Solid State Drive (SSD) WDS200T1X0E',
      price: 500,
      discount_price: 372,
      description: `<ul><li>Next-gen PCIe Gen4 technology optimized for top-tier gaming (not intended for NAS or server environments)
      </li><li>Irrationally fast read/write speeds up to 7000/5300 MB/s (1TB model) and up to 1,000,000 IOPS (1TB and 2TB models)
      </li><li>Up to 2TB capacity to hold your favorite battle-ready games 
      </li><li>Downloadable WD_BLACK Dashboard software to customize and control your gaming experience
      </li><li>Compact form factor design for easy connectivity
      </li><li>Optimized for top-tier gaming</li></ul>`,
      stock: 10,
      category: 'Storage',
      brand: 'Western Digital',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-250-160-01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-250-160-V04.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-250-160-V05.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-250-160-V06.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'afde3b43-c5a3-4786-a7cd-1565a048dc5f',
      title: 'Seagate IronWolf 2TB NAS Hard Drive 5900 RPM 64MB Cache SATA 6.0Gb/s CMR 3.5" Internal HDD for RAID Network Attached Storage ST2000VN004 - OEM',
      price: 200,
      discount_price: 100,
      description: `<ul><li>Range of capacities up to 14TB.
      </li><li>Workload rate of 180TB/year.
      </li><li>Optimized for NAS with AgileArray, enables dual-plane balancing and RAID optimization in multi-bay environments.
      </li><li>Actively protect your NAS with IronWolf Health Management.
      </li><li>Rotational Vibration (RV) sensors.
      </li><li>Always-on, always-accessible 24x7 performance.
      </li><li>1M hours MTBF, 3-year limited warranty.</li></ul>`,
      stock: 10,
      category: 'Storage',
      brand: 'Seagate',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/22-179-007-10.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/22-179-007-06.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/22-179-007-07.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/22-179-007-09.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'e8c8a8ba-8a96-41bc-9e23-9d3b20b1565b',
      title: 'SAMSUNG 870 EVO Series 2.5" 500GB SATA III V-NAND Internal Solid State Drive (SSD) MZ-77E500B/AM',
      price: 100,
      discount_price: 90,
      description: '<ul><li>THE SSD ALL-STAR: The latest 870 EVO has indisputable performance, reliability and compatibility built upon Samsung\'s pioneering technology</li><li>EXCELLENCE IN PERFORMANCE: Enjoy professional level SSD performance with 870 EVO, which maximizes the SATA interface limit to 560/530 MB/s sequential speeds, accelerates write speeds and maintains long term high performance with a larger variable buffer</li><li>INDUSTRY DEFINING RELIABILITY: Meet the demands of every task from everyday computing to 8K video processing, with up to 2,400 TBW </li><li>MORE COMPATIBLE THAN EVER: 870 EVO has been compatibility tested for major host systems and applications, including chipsets, motherboards, NAS, and video recording devices</li><li>UPGRADE WITH EASE: Simply plug 870 EVO into the standard 2.5 inch SATA form factor on your desktop PC or laptop and let the renewed migration software takes care of the rest</li></ul>',
      stock: 10,
      category: 'Storage',
      brand: 'Samsung',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-792-V01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-792-V02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-792-V03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-792-V04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: 'e8c8a8ba-8a96-41bc-9e23-9d3b20b1565a',
      title: 'Thermaltake UX200 ARGB Lighting 120mm Hydraulic Bearing CPU Cooler - CL-P065-AL12SW-A',
      price: 100,
      discount_price: 44,
      description: `<ul><li>300 - 1500 RPM 
      </li><li>43.34 CFM 
      </li><li>Aluminum Fins</li><li>Copper Heatpipes</li></ul>`,
      stock: 10,
      category: 'CPU Cooler',
      brand: 'Thermaltake',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/35-106-595-S01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/35-106-595-S03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/35-106-595-S02.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/35-106-595-S04.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '1f326ce3-4252-4c87-977e-5ecd84044019',
      title: 'NZXT Kraken X53 RGB 240mm - RL-KRX53-R1 - AIO RGB CPU Liquid Cooler - Rotating Infinity Mirror Design - Powered By CAM V4 - RGB Connector - Aer RGB V2 120mm Radiator Fans LGA 1700 Compatible',
      price: 300,
      discount_price: 200,
      description: `<ul><li>INCREDIBLE PERFORMANCE: The Aer RGB V2 radiator fans feature a chamfered intake and fluid dynamic bearing that provides silent operations, durability, and powerful cooling performance
      </li><li>DESIGN: With a re-designed cap and larger infinity mirror ring LED, the new Kraken X allows for adjusting the orientation of the pump head to fit without affecting the direction of the logo
      </li><li>BIGGER AND BRIGHTER: 10% bigger infinitty mirror cap allows for more vivid RGB and a rotating cap accommodates re-orienting the logo no matter the direction the cooler is installed
      </li><li>BETTER CONTROL: Full CAM integration allows you to manage your Kraken’s performance with precision
      </li><li>SIMPLE INSTALLATION: Fine nylon mesh sleeves strengthen the rubber tubing, providing durability and protection against mishandling
      </li><li>Extra LGA 1700 brackets required, contact MFR for bracket</li></ul>`,
      stock: 10,
      category: 'CPU Cooler',
      brand: 'NZXT',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13C-0069-00032-S01.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13C-0069-00032-S04.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13C-0069-00032-S03.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/13C-0069-00032-S05.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
    {
      id: '853bc5e4-093e-48e8-923b-e8cdf34163e2',
      title: 'Noctua NH-U14S, Premium CPU Cooler with NF-A15 140mm Fan (Brown)',
      price: 100,
      discount_price: 90,
      description: '<ul><li>Award-winning, slim 140mm single-tower design combines outstanding cooling performance with superb quietness of operation and excellent RAM compatibility</li><li>Does not overhang the RAM slots on LGA2066 and LGA2011 motherboards, ensuring full compatibility with tall modules</li><li>Highly optimised NF-A15 140mm fan with PWM support and Low-Noise Adaptor for automatic speed control and ultra-quiet operation</li><li>Includes high-end NT-H1 thermal paste and SecuFirm2 mounting system for easy installation on Intel LGA1150, LGA1151, LGA1155, LGA1156, LGA1200, LGA2011, LGA2066 and AMD AM4, AM5</li><li>Renowned Noctua quality backed up by 6-year manufacturer’s warranty, deluxe choice for Intel Core i9, i7, i5, i3 (e.g. 11900K, 11700K, 10900K, 10980XE) and AMD Ryzen (e.g. 5950X, 5900X, 5800X, 5600X)</li></ul>',
      stock: 10,
      category: 'CPU Cooler',
      brand: 'Noctua',
      image_urls: [
        'https://c1.neweggimages.com/ProductImageCompressAll1280/AADYS210211olF7l.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/AADYS210211CbeWt.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/AADYS210211Jh3T1.jpg',
        'https://c1.neweggimages.com/ProductImageCompressAll1280/AADYS210211I9kJv.jpg'
      ],
      created_at: new Date,
      updated_at: new Date,
    },
  ],
  categories: [
    {
      id: '41924fed-e951-4482-9a6d-81a38ea8555e',
      category_name: 'CPU / Processors'
    },
    {
      id: '42b22d2d-9e90-439f-af65-06e7f57a94ea',
      category_name: 'Motherboard'
    },
    {
      id: 'd6fdb361-4e39-468c-b056-ac1094db81cf',
      category_name: 'Memory'
    },
    {
      id: '87671d21-4439-4f6c-b7da-03cd4a120af6',
      category_name: 'Video Cards'
    },
    {
      id: '86aaf61f-35c4-4a55-ab12-53b82154c79d',
      category_name: 'Case'
    },
    {
      id: '4a305323-ee80-4a85-913e-8cc66a25e8d8',
      category_name: 'Power Supply'
    },
    {
      id: '42fb7fa3-aeef-4acc-ba4a-e31aea16d703',
      category_name: 'Storage'
    },
    {
      id: '3474c65d-474b-4d30-b89a-ec71be3daf38',
      category_name: 'CPU Cooler'
    },
    {
      id: 'c9c081a4-e4ff-40f5-8aa1-3ac8f338f8a6',
      category_name: 'Operating System'
    }
  ],
  brands: [
    {
      id: 'a50c7a93-5024-4d60-b950-3223e6c967ff',
      brand_name: 'Intel'
    },
    {
      id: 'eb1ceee1-2c1c-4781-8831-6904f0081aea',
      brand_name: 'AMD'
    },
    {
      id: '0bc3dd33-7a60-4a44-9301-53d4776114a2',
      brand_name: 'MSI'
    },
    {
      id: '92efc596-27e2-461f-b193-c472cc7a6bba',
      brand_name: 'ASRock'
    },
    {
      id: '04f3dd79-88bb-4c33-b5f1-ca365bca0ad6',
      brand_name: 'Asus'
    },
    {
      id: '7386eb5e-275e-4b39-863c-f62e1cc60474',
      brand_name: 'Gigabyte'
    },
    {
      id: 'ca040b45-6da6-481f-b5eb-db5ee1fb8042',
      brand_name: 'G.Skill'
    },
    {
      id: 'a0093980-d6ae-48d1-a6dc-bd0862ecf9d2',
      brand_name: 'Corsair'
    },
    {
      id: '84cf292f-beba-455c-ae48-2b23699b0ba8',
      brand_name: 'Kingston Technology Corp'
    },
    {
      id: '8687b944-399a-43de-bcbf-e8631a494694',
      brand_name: 'EVGA'
    },
    {
      id: '0137d30b-81b1-4cbf-b202-fe75b68ef2af',
      brand_name: 'ZOTAC'
    },
    {
      id: '84cf292f-beba-455c-ae48-2b23699b0ba9',
      brand_name: 'Sapphire Tech'
    },
    {
      id: '4976335e-0598-4011-b645-baf8c69f56c1',
      brand_name: 'NZXT'
    },
    {
      id: '2ff3eb53-fce9-4d9b-b125-54d550ceec38',
      brand_name: 'Cooler Master'
    },
    {
      id: 'a2b1bf98-2e7e-4972-ba01-e74522045e28',
      brand_name: 'Samsung'
    },
    {
      id: 'f4e39e3a-7928-4dc6-b076-ee62e9b36af8',
      brand_name: 'Noctua'
    },
    {
      id: '68b00e8d-bd4e-49b5-a133-b06a38a401a0',
      brand_name: 'Thermaltake'
    },
    {
      id: '7e39e44b-50ed-4291-a275-b12be856c654',
      brand_name: 'Lian li'
    },
    {
      id: 'dd503ae0-a00e-460c-8277-a80464d71a98',
      brand_name: 'Western Digital'
    },
    {
      id: 'b3a95094-f9e6-4028-baef-2dcfc43b473e',
      brand_name: 'Seagate'
    }
  ],
  gpu_specs: [
    {
      id: 'b5119e99-921b-403e-bc59-21a52b3becc5',
      category_id: '87671d21-4439-4f6c-b7da-03cd4a120af6',
      product_id: '29f27c40-8888-481e-8601-d3d36af9ad07',
      brand: 'EVGA',
      series: 'FTW3',
      model: '08G-P5-3797-KL',
      interface: 'PCI Express 4.0',
      chipset_manufactor: 'NVIDIA',
      gpu: 'NVIDIA GeForce RTX 30 Series',
      cuda_cores: 6144,
      effective_memory_clock: '19000 MHz',
      memory_size: '8GB',
      memory_interface: '256-Bit',
      memory_type: 'GDDR6X',
      multi_monitor_support: 4,
      hdmi: '1 x HDMI 2.1',
      display_port: '3 x DisplayPort 1.4a',
      max_resolution: '7680 x 4320',
      cooler: 'Triple Fans',
      thermal_design_power: '290W',
      power_connector: '750W',
      max_length: '300 mm',
      dimentions: '11.81" x 5.38"',
    }
  ]
};
