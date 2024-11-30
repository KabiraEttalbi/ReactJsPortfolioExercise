export default function AboutMe(props){
    return(
        <section className="w-full bg-gray-100 p-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
            
            <div className="mb-6 md:mb-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
              <img
                src={props.image}
                alt={props.name}
                className="w-full h-full object-cover"
              />
            </div>
    
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600 mt-4">
                Hello! I am an enthusiastic web developer with expertise in HTML, CSS, JavaScript, PHP and frameworks like Angular and Laravel. I have a solid experience in designing intuitive user interfaces. My motivation and quick adaptability make me a candidate ready to contribute significantly to innovative projects and further develop my skills in a dynamic professional environment.
              </p>
            </div>
          </div>
        </section>
      );
}