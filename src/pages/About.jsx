import { motion } from 'framer-motion';

export default function About() {
  const timeline = [
    {
      text: "At 100Days.co, we are Digital Commerce Experts who believe it takes just 100 days to build a functional, scalable, and growth-ready digital presence—and we make that happen.",
      img: "1.png",
      span: "md:col-span-2",
      layout: "flex-col lg:flex-row"
    },
    {
      text: "Founded in 2021 by the core team at Bombay Shaving Company, 100Days.co began as a growth initiative to support investor brands. What started as a support function quickly evolved into a full-stack execution powerhouse, built to help established consumer brands navigate the complexities of going direct.",
      img: "2.png",
      span: "col-span-1",
      layout: "flex-col"
    },
    {
      text: "As the D2C and digital commerce landscape grew more competitive, we stepped in—not just with strategic guidance, but with end-to-end execution across websites, ads, CRM, warehousing, analytics, and more. Our team brings speed, precision, and platform expertise to every engagement.",
      img: "3.png",
      span: "col-span-1",
      layout: "flex-col-reverse"
    },
    {
      text: "Today, we power the digital growth journeys of some of India's most trusted consumer brands—including Durex, Colgate, Avon, Jimmy's Cocktails, and many more. We don't just advise. We launch, operate, and scale—with a bias for action and a passion for outcomes.",
      img: "/about-growth.svg",
      span: "md:col-span-2",
      layout: "flex-col lg:flex-row-reverse"
    }
  ];

  const renderTimeline = () => {
    const items = [];
    for (let i = 0; i < timeline.length; i++) {
      items.push(
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-500 flex ${timeline[i].layout} ${timeline[i].span} gap-8 p-10 md:p-14`}
        >
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium">
              {timeline[i].text}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[250px] lg:min-h-[350px]">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              src={timeline[i].img.startsWith('/') ? timeline[i].img : `/From 0 to 100 days/${timeline[i].img}`}
              alt="Narrative Illustration" 
              className="w-full h-full object-contain max-h-[300px] opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>
      );
    }
    return items;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-black dark:text-white mb-6">About Us</h1>
        <p className="text-xl md:text-2xl text-black dark:text-neutral-300 font-light leading-relaxed max-w-2xl">
          The core team, the journey, and the execution engine behind India's fastest-growing digital brands.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden mb-16">
        {[
          { value: '2021', label: 'Founded' },
          { value: '14+', label: 'Brands Scaled' },
          { value: '5+', label: 'Years of Expertise' },
          { value: '100%', label: 'Execution Focus' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-black px-8 py-8 flex flex-col gap-1">
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">{stat.value}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {renderTimeline()}
      </div>
    </div>
  );
}
