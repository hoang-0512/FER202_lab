import React, { useState } from 'react';
import './Orchids.css';

const OrchidsPresentation = ({ orchids, onNavigateToDetail }) => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleImageClick = (orchid) => {
    setSelectedOrchid(orchid);
  };

  const handleDetailClick = (index) => {
    onNavigateToDetail(index);
  };

  const closeModal = () => {
    setSelectedOrchid(null);
  };

  return (
    <>
      <div className="orchids-grid">
        {orchids.map((orchid, index) => (
          <div key={index} className="orchid-card">
            <img 
              src={orchid.image} 
              alt={orchid.name} 
              className="orchid-image" 
              onClick={() => handleImageClick(orchid)}
              style={{ cursor: 'pointer' }}
            />
            <h3 className="orchid-title">{orchid.name}</h3>
            <div className="orchid-info">
              <p><span className="info-label">Xuất xứ:</span> {orchid.origin}</p>
              <p><span className="info-label">Màu sắc:</span> {orchid.color}</p>
              <p><span className="info-label">Loại:</span> {orchid.category}</p>
              <p><span className="info-label">Đánh giá:</span> <span className="rating">{orchid.rating} ⭐</span></p>
            </div>
            <div className="orchid-badges">
              {orchid.isSpecial && <span className="badge special">☀️ Đặc biệt</span>}
              {orchid.isNatural && <span className="badge natural">🌱 Tự nhiên</span>}
            </div>
            <button 
              className="detail-button"
              onClick={() => handleDetailClick(index)}
            >
              Xem trang chi tiết
            </button>
          </div>
        ))}
      </div>

      {selectedOrchid && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-grid">
              <div className="modal-image-container">
                <img 
                  src={selectedOrchid.image} 
                  alt={selectedOrchid.name} 
                  className="modal-image" 
                />
              </div>
              <div className="modal-details">
                <h2 className="modal-title">{selectedOrchid.name}</h2>
                <div className="modal-divider"></div>
                
                <div className="modal-detail-item">
                  <span className="detail-label">Xuất xứ:</span>
                  <span className="detail-value">{selectedOrchid.origin}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Màu sắc:</span>
                  <span className="detail-value">{selectedOrchid.color}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Loại:</span>
                  <span className="detail-value">{selectedOrchid.category}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Đánh giá:</span>
                  <span className="detail-value rating">{selectedOrchid.rating} ⭐</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Lượt thích:</span>
                  <span className="detail-value likes">{selectedOrchid.numberOfLike} ❤️</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Đặc điểm:</span>
                  <span className="detail-value features">
                    {selectedOrchid.isSpecial && <span className="feature-badge special">☀️ Đặc biệt</span>}
                    {selectedOrchid.isNatural && <span className="feature-badge natural">🌱 Tự nhiên</span>}
                  </span>
                </div>
                
                <button className="back-button" onClick={closeModal}>Quay lại</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrchidsPresentation;
