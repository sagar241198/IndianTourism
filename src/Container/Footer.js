const Footer = () => {
    return (
        <div className="footerDiv ">
            <div className="py-2" style={{ width: "600px", margin: "auto", height: "200px" }}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 border-right" style={{ width: "300px", height: "100px" }}>
                        <div><b>Follow Us</b></div>
                        <i class="fab fa-facebook mr-4"></i>
                        <i class="fab fa-instagram mr-4"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div><b> <i class="fas fa-id-card mr-1"></i>Contact Us</b></div>
                        Address: Street main road bangalore,<br />
                        Email:"abc123@gmail.com"
                        <div><i class="fab fa-whatsapp mr-1"></i>: +91 987 654 0322</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;