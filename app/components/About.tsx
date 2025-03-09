const About = () => {
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center py-16 snap-start bg-[#ffffff] text-[#000000]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2">
            Hi, My name is Karan Khanna. I am a post-graduate from George Brown College, in the course Applied A.I
            Solutions Development. I also have a Bachelors of Technology in Computer Science Engineering from Amity
            University. My work Expereince includes a 4 month internship at MN Squared Inc based in London, ON, Canada
            as an ML Engineer, I also have 1 year and 10 months experience working as a Senior Analyst at Capgemini
            based in Mumbai. If I had to describe myself in three words, it would be passionate, curious and
            hardworking. I am extremely passionate about Machine Learning and Artificial Intelligence, I am always
            curious when it comes to the new tech and research into ML and AI, and I always work hard to create the best
            projects that I am capable of creating. My technical skills include Python, SQL, Data Analysis, Machine
            Learning, Deep Learning, Java, ReactJS and much more.{" "}
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://cdnp1.stackassets.com/120ffd8c9b28dc256cb16fb78c9957758b77b45f/store/c62147ac21dd5ade032638f4613fc3475e0b3967ae3c174dad3273334b0e/sale_32415_article_image.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  )
}

export default About

