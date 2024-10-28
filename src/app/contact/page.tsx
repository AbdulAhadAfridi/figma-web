export default Contact
function Contact(){
    return(
        <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About CHEAMIND</h3>
            <p className="text-lg mb-4">
              CHEAMIND is dedicated to enhancing indoor environments with beautiful plants. We provide 
              a variety of indoor plant options to suit any space, ensuring the well-being of our customers.
            </p>
          </div>
      
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="http://localhost:3000" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/product" className="hover:text-blue-400">Products</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact" className="hover:text-blue-400">Contacts</a>
                </li>
                </ul>
          </div>
      
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg">Email: <a href="mailto:support@cheamind.com" className="hover:text-blue-400">hafizabdulahadkhanafridi@gmail.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+1234567890" className="hover:text-blue-400">03483992004</a></p>
            <div className="mt-4">
              <h4 className="font-semibold">Follow Us:</h4>
              <a href="#" className="hover:text-blue-400">Facebook</a> | 
              <a href="#" className="hover:text-blue-400 ml-2">Instagram</a> | 
              <a href="#" className="hover:text-blue-400 ml-2">Twitter</a>
            </div>
          </div>
        </div>
      
        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">© 2024 CHEAMIND. All rights reserved.</p>
        </div>
      </footer>
    );
}