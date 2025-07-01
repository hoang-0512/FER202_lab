import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Orchids.css";

const OrchidDetail = ({ orchids }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the orchid with the given ID
  const orchid = orchids.find((o, index) => index.toString() === id);

  // Go back to the home page
  const handleBack = () => {
    navigate("/");
  };

  // If orchid not found, show a message
  if (!orchid) {
    return (
      <div className="orchid-detail-container">
        <div className="orchid-detail-not-found">
          <h2>Không tìm thấy thông tin hoa lan</h2>
          <button className="back-button" onClick={handleBack}>
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orchid-detail-container">
      <div className="orchid-detail-content">
        <div className="navigation-header">
          <button className="back-button-compact" onClick={handleBack}>
            <span className="back-icon">←</span> Quay lại
          </button>
        </div>

        <h1 className="detail-page-title">{orchid.name}</h1>
        <div className="detail-page-divider"></div>

        <div className="orchid-detail-grid">
          <div className="orchid-detail-image">
            <img src={orchid.image} alt={orchid.name} />

            <div className="orchid-detail-badges">
              {orchid.isSpecial && (
                <span className="detail-badge special">☀️ Đặc biệt</span>
              )}
              {orchid.isNatural && (
                <span className="detail-badge natural">🌱 Tự nhiên</span>
              )}
            </div>
          </div>

          <div className="orchid-detail-info">
            <div className="info-section basic-info">
              <h3 className="info-section-title">Thông tin cơ bản</h3>

              <div className="detail-item">
                <span className="detail-label">Xuất xứ:</span>
                <span className="detail-value">{orchid.origin}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Màu sắc:</span>
                <span className="detail-value">{orchid.color}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Loại:</span>
                <span className="detail-value">{orchid.category}</span>
              </div>
            </div>

            <div className="info-section rating-section">
              <h3 className="info-section-title">Đánh giá & Tương tác</h3>

              <div className="detail-item rating-item">
                <span className="detail-label">Đánh giá:</span>
                <span className="detail-value rating-stars">
                  {Array(orchid.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="star">
                        ⭐
                      </span>
                    ))}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Lượt thích:</span>
                <span className="detail-value likes-count">
                  {orchid.numberOfLike} ❤️
                </span>
              </div>
            </div>

            <div className="info-section description-section">
              <h3 className="info-section-title">Mô tả chi tiết</h3>
              <p className="detail-description">
                Đây là loài hoa lan {orchid.name} có màu {orchid.color}, xuất xứ
                từ {orchid.origin}, thuộc loại {orchid.category}.
                {orchid.isSpecial
                  ? " Đây là một loài hoa lan đặc biệt với đặc tính quý hiếm. "
                  : " "}
                {orchid.isNatural
                  ? "Loài lan này được trồng bằng phương pháp canh tác hiện đại."
                  : "Loài lan này được trồng bằng phương pháp canh tác hiện đại."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrchidDetail;
