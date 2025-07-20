import aboutBg from "../../assets/home/chef-service.jpg";

const AboutBistro = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed bg-no-repeat min-h-[400px] mb-20 flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="bg-white p-8 rounded-lg max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Bistro Boss</h2>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default AboutBistro;
