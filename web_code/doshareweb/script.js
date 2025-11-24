const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
const STAR_COUNT = 500;
const COLORS = [
    'rgba(255, 105, 180, 0.8)', // Pink
    'rgba(135, 206, 235, 0.8)', // Blue
    'rgba(255, 255, 255, 0.9)', // White
    'rgba(255, 255, 224, 0.8)'  // Yellow
];

function Star() {
    this.x = Math.random() * width;
    this.y = height * (Math.random() * 0.4 + 0.6); // 集中在屏幕下方形成"星河"
    
    this.vx = (Math.random() - 0.5) * 0.05; 
    this.vy = Math.random() * 0.3 + 0.1;  // 向下流动
    
    this.radius = Math.random() * 1.5 + 0.5;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.blinkSpeed = Math.random() * 0.05 + 0.01; 
}

Star.prototype.draw = function(time) {
    const opacity = (Math.sin(time * this.blinkSpeed) + 1) / 2 * 0.5 + 0.5;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    
    ctx.fillStyle = this.color.replace('0.8', opacity.toFixed(2)).replace('0.9', opacity.toFixed(2));
    ctx.fill();

    // 柔和的光晕/辉光
    ctx.shadowBlur = this.radius * 3;
    ctx.shadowColor = this.color.replace('0.8', opacity.toFixed(2)).replace('0.9', opacity.toFixed(2));
    
    // 绘制彗尾 (模拟流动感)
    if (this.vy > 0.3 && this.y < height - 50) {
        ctx.strokeStyle = this.color.replace('0.8', (opacity * 0.5).toFixed(2));
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 30, this.y - this.vy * 30);
        ctx.stroke();
    }
};

Star.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y > height + 10) {
        this.y = height * 0.6; // 从星河起始线重置
        this.x = Math.random() * width;
        this.vx = (Math.random() - 0.5) * 0.05;
        this.vy = Math.random() * 0.3 + 0.1;
    }
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
};

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
    }
}

let lastTime = 0;
function animate(currentTime) {
    // 修复：使用完全不透明的黑色清除画布
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // 改为完全不透明
    ctx.fillRect(0, 0, width, height);
    
    ctx.shadowBlur = 0;
    
    stars.forEach(star => {
        star.update();
        star.draw(currentTime / 1000);
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 
animate(0);