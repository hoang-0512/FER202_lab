import React from "react";
import "./About.css";
import orchidData from "../../../data/ListOfOrchids";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">Về Chúng Tôi</h1>
          <p className="about-subtitle">
            Khám phá thế giới tuyệt đẹp của những loài hoa lan quý hiếm
          </p>
        </div>
        <div className="about-hero-image">
          <img
            src={orchidData.find(orchid => orchid.id === "15").image}
            alt="Lan Kim Tuyến - Hoa lan đẹp nhất"
          />
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-content">
            <h2>Câu Chuyện Của Chúng Tôi</h2>
            <p>
              Được thành lập với tình yêu sâu sắc dành cho những loài hoa lan quý hiếm, 
              chúng tôi tự hào là điểm đến hàng đầu cho những người đam mê hoa lan tại Việt Nam. 
              Với hơn 10 năm kinh nghiệm trong lĩnh vực trồng và chăm sóc hoa lan, 
              chúng tôi đã xây dựng được một bộ sưu tập phong phú các loài hoa lan 
              từ khắp nơi trên thế giới.
            </p>
            <p>
              Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm tuyệt vời 
              nhất khi khám phá vẻ đẹp thanh tao, quý phái của các loài hoa lan. 
              Chúng tôi không chỉ cung cấp những cây hoa lan chất lượng cao mà còn 
              chia sẻ kiến thức, kinh nghiệm chăm sóc để giúp bạn có thể nuôi dưỡng 
              những "nàng công chúa" này một cách tốt nhất.
            </p>
          </div>
          <div className="section-image">
            <img
              src={orchidData.find(orchid => orchid.id === "11").image}
              alt="Lan Hoàng Gia - Bộ sưu tập hoa lan"
            />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="section-image">
            <img
              src={orchidData.find(orchid => orchid.id === "1").image}
              alt="Taichung Beauty - Chuyên môn chăm sóc hoa lan"
            />
          </div>
          <div className="section-content">
            <h2>Chuyên Môn & Dịch Vụ</h2>
            <p>
              Đội ngũ chuyên gia của chúng tôi bao gồm những người có nhiều năm kinh nghiệm 
              trong lĩnh vực nghiên cứu và phát triển các loài hoa lan. Chúng tôi liên tục 
              cập nhật những kiến thức mới nhất về kỹ thuật trồng, chăm sóc và nhân giống 
              để mang đến những sản phẩm tốt nhất cho khách hàng.
            </p>
            <div className="services-grid">
              <div className="service-item">
                <h3>🌸 Bộ Sưu Tập Đa Dạng</h3>
                <p>Hơn 100 loài hoa lan quý hiếm từ khắp nơi trên thế giới</p>
              </div>
              <div className="service-item">
                <h3>👨‍🌾 Chuyên Gia Tư Vấn</h3>
                <p>Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ 24/7</p>
              </div>
              <div className="service-item">
                <h3>🚚 Giao Hàng An Toàn</h3>
                <p>Đảm bảo cây được vận chuyển an toàn đến tay khách hàng</p>
              </div>
              <div className="service-item">
                <h3>📚 Hướng Dẫn Chăm Sóc</h3>
                <p>Cung cấp tài liệu hướng dẫn chi tiết cho từng loại hoa lan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Chất Lượng</h3>
              <p>Cam kết mang đến những cây hoa lan chất lượng cao nhất, được chăm sóc tỉ mỉ từ khâu gieo trồng đến khi đến tay khách hàng.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Tình Yêu Thiên Nhiên</h3>
              <p>Sống và làm việc với tình yêu sâu sắc dành cho thiên nhiên, góp phần bảo tồn và phát triển các loài hoa lan quý hiếm.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Tin Cậy</h3>
              <p>Xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin cậy, minh bạch và dịch vụ chuyên nghiệp.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Đổi Mới</h3>
              <p>Không ngừng nghiên cứu và ứng dụng những kỹ thuật mới để nâng cao chất lượng sản phẩm và dịch vụ.</p>
            </div>
          </div>
        </section>
        <section className="about-cta">
          <div className="cta-content">
            <h2>Hành Trình Khám Phá Cùng Chúng Tôi</h2>
            <p>
              Chúng tôi luôn sẵn sàng đồng hành cùng bạn trong hành trình khám phá 
              và yêu thương những loài hoa lan tuyệt đẹp. Hãy liên hệ với chúng tôi 
              để được tư vấn và hỗ trợ tốt nhất.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Liên Hệ Ngay
              </a>
              <a href="/" className="cta-button secondary">
                Xem Bộ Sưu Tập
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
