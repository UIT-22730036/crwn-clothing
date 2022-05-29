import DirectoryItem from "../DirectoryItem/DirectoryItem";

import "./Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <DirectoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Directory;
