# Leoend-site
# 1. Repo clone karo
git clone https://github.com/IshabArsh/Leoend-site.git
cd Leoend-site

# 2. Delete all files except html, css, js
find . -type f ! -name "*.html" ! -name "*.css" ! -name "*.js" ! -name "LICENSE" ! -name "README.md" -delete

# 3. Commit and push changes
git add .
git commit -m "Removed all unwanted image and extra files"
git push
