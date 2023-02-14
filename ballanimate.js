window.onload = function() {
  const NBALL = 200; // 공의 개수
  const R = 5; // 공의 반지름
  const TIME_INTERVAL = 33; //애니메이션의 시간 간격(ms 단위)
  const BACK_ALPHA = 0.3; // 배경의 알파의값
  
  // canvas의 랜더링 컨덱스트 가져오기
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');

  //벽을 표현하는 객체
  const wall = {
    left:0,
    right: canvas.width, 
    top:0,
    bottom:canvas.clientHeight
  };

//공 객체를 NBALL개 만들어 배열 balls에 저장
  const balls = [];
  for(let i=0; i<NBALL; i++){
    balls[i] = new Ball(wall.right/2, wall.bottom/2,R);
    balls[i].setVelocityAsRandom(2,7).setColorAsRandom(50,225);
  }

  //애니메이션 실행 : TIME_INTERVAL(ms)마다 drawFrame을 실행
  setInterval(drawFrame, TIME_INTERVAL);

  //애니메이션의 프레임 그리기
  function drawFrame() {
    //배경을 검은색으로 칠한다
    ctx.fillStyle = 'rgba(0,0,0,'+BACK_ALPHA+')';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    //공의 위치를 갱신하여 그린다.
    for(i=0; i<balls.length; i++){
      balls[i].move().collisionWall(wall).draw(ctx);
    }
  }
};


//Ball 생성자
function Ball(x,y,r,vx,vy,color) {
  this.x = x; //공의 x좌표
  this.y = y; //공의 y좌표
  this.r = r; //공의 반지름
  this.vx = vx; // 공 속도의 x 성분
  this.vy = vy; // 공 속도의 y 성분
  this.color = color; // 공의 색상
}

//Ball 생성자의 프로토타입
Ball.prototype = {
  //속도를 임의로 설정
  setVelocityAsRandom: function(vmin, vmax) {
    let v = vmin + Math.random()*(vmax-vmin);
    let t = 2*Math.PI*Math.random();
    this.vx = v*Math.cos(t);
    this.vy = v*Math.sin(t);
    return this;
  },
  //색상을 임의로 설정
  setColorAsRandom : function(lmin, lmax) {
    let R = Math.floor(lmin+Math.random()*(lmax-lmin));
    let G = Math.floor(lmin+Math.random()*(lmax-lmin));
    let B = Math.floor(lmin+Math.random()*(lmax-lmin));
    this.color = 'rgb('+R+","+G+","+B+")";
    return this;
  },

  //공 그리기
  draw : function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0,2*Math.PI, true);
    ctx.fill();
    return this;
  },

  // 공의 위치를 갱신
  move: function() {
    this.x += this.vx;
    this.y += this.vy;
    return this;
  },

  //벽과 공의 충돌
  collisionWall: function(wall) {
      if( this.x - this.r < wall.left){ //왼쪽 벽과 충돌 했을 때 
        this.x = wall.left + this.r;
        if(this.vx < 0) this.vx *= -1;
      }

      if (this.x + this.r > wall.right){ //오른쪽 벽과 충돌했을 때
        this.x = wall.right - this.r;
        if(this.vx > 0) this.vx *= -1;
      }  

      if(this.y - this.r < wall.top) {
        this.y = wall.top + this.r;
        if(this.vy < 0) this.vy *= -1;
      }

      if(this.y + this.r > wall.bottom) {
        this.y = wall.bottom - this.r;
        if(this.vy > 0) this.vy *= -1;
      }
    
      return this;

    }
}