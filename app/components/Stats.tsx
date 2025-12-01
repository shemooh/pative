export default function Stats() {
  const stats = [
    { num: "500+", label: "Happy Clients" },
    { num: "10K+", label: "Projects Delivered" },
    { num: "98%", label: "Client Retention" },
    { num: "$25M+", label: "Revenue Generated" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 text-white text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl">
              <div className="text-4xl md:text-5xl font-black mb-4">{stat.num}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
