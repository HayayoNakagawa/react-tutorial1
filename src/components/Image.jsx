export default function Image() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image-grid" style={imageGridStyle}>
            <a href="favorite-1.jpg">
              <img src="favorite-1_th.jpg" alt="Small black bird..." style={imageStyle} />
            </a>
            <a href="favorite-2.jpg">
              <img src="favorite-2_th.jpg" alt="Top half of a pretty bird..." style={imageStyle} />
            </a>
            <a href="favorite-3.jpg">
              <img src="favorite-3_th.jpg" alt="Top half of a large bird..." style={imageStyle} />
            </a>
            <a href="favorite-4.jpg">
              <img src="favorite-4_th.jpg" alt="Large bird..." style={imageStyle} />
            </a>
          </figure>
        </div>
      </div>
    );
  }
  
  // 2×2のグリッドレイアウト
  const imageGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2px',
  };
  
  // 画像の大きさを調整
  const imageStyle = {
    width: '100%',  // ここで幅を変更
    height: 'auto',  // 縦横比を維持
    objectFit: 'cover', // 画像を枠内に収める
    margin: '0 auto', // 中央揃え
  };
  