import fs from 'fs';

const logos = {
  "aws.png": "https://img.icons8.com/color/512/amazon-web-services.png",
  "docker.png": "https://img.icons8.com/color/512/docker.png",
  "k8s.png": "https://img.icons8.com/color/512/kubernetes.png",
  "linux.png": "https://img.icons8.com/color/512/linux.png",
  "python.png": "https://img.icons8.com/color/512/python.png",
  "jenkins.png": "https://img.icons8.com/color/512/jenkins.png",
  "mysql.png": "https://img.icons8.com/color/512/mysql-logo.png",
  "mongo.png": "https://logo.clearbit.com/mongodb.com"
};

async function downloadLogos() {
  for (const [filename, url] of Object.entries(logos)) {
    try {
      const res = await fetch(url);
      const ab = await res.arrayBuffer();
      fs.writeFileSync(`C:/Users/Gaurav/rajesh-portfolio/public/images/${filename}`, Buffer.from(ab));
      console.log("Downloaded " + filename);
    } catch (e) {
      console.error(e);
    }
  }
}
downloadLogos();
