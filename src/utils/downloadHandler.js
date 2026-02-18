// Define the function first
 
const handleDownload = async (imageUrl, flowerName) => {
         console.log("Downloading...", imageUrl)
  try {
 
       
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    // Fix: Added the missing dot (.) between URL and createObjectURL
    const url = window.URL.createObjectURL(blob); 
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${flowerName}-floraFlower.jpg`;
    document.body.appendChild(link);
    link.click();

    // Cleanup to maintain Performance Requirements
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Download failed:", error);
  }
};

// Export it at the end
export default handleDownload;