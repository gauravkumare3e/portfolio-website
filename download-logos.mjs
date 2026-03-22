import fs from 'fs';

const logos = {
  "aws.png": "https://ui-avatars.com/api/?name=AWS&background=232F3E&color=fff&size=512",
  "docker.png": "https://ui-avatars.com/api/?name=Docker&background=0db7ed&color=fff&size=512",
  "k8s.png": "https://ui-avatars.com/api/?name=K8s&background=326ce5&color=fff&size=512",
  "linux.png": "https://ui-avatars.com/api/?name=Linux&background=FCC624&color=000&size=512",
  "python.png": "https://ui-avatars.com/api/?name=Python&background=3776AB&color=fff&size=512",
  "jenkins.png": "https://ui-avatars.com/api/?name=Jenkins&background=d33833&color=fff&size=512",
  "mysql.png": "https://ui-avatars.com/api/?name=MySQL&background=4479A1&color=fff&size=512",
  "mongo.png": "https://ui-avatars.com/api/?name=Mongo&background=47A248&color=fff&size=512"
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
