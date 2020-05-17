export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfied = this.createPlayfield();
    activePieceX = 0;
    activePieceY = 0;

    activePiece = {
        x: 0,
        y: 0,
        get blocks (){
    return this.rotations[this.rotationIndex];
        },
        blocks: [
            [0,1,0,],
            [0,1,1,],
            [0,1,0,]
        ],
    };

    getState(){

        const playfied = createPlayfield();
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;



        for (let y = 0; y < this.playfied.length; y++) {
            playfied[y] = [];

            for (let x = 0; x < this.playfied[y].length; x++) {
                playfied[y][x] = this.playfied[y][x];
            }
            
        }

        for (let y = 0; index < blocks.length; y++) {
           for (let x = 0; index < blocks[y].length; x++) {
               if ( blocks[y][x] ) {
                   playfied[pieceY + y] [pieceX + x] = blocks[y][x];
               }
               
           }
            
        }

        return {
            playfied
        };
    }

    createPlayfield(){
            const playfied = [];

        for (let y = 0; y < 20; y++) {
            playfied[y] = [];

            for (let x = 0; x < 10; x++) {
                playfied[y][x] = 0;
            }
            
        }
    }


    movePieceLeft(){
        this.activePiece.x -= 1;

    if(this.isPeaceOutOfBounds()){
        this.activePiece.x += 1;
    }
    
}
  
    movePieceRight(){
        this.activePiece.x += 1;

        if(this.isPeaceOutOfBounds()){
            this.activePiece.x -= 1;
        }

    }

    movePieceDown(){
        this.activePiece.y += 1;

        if(this.isPeaceOutOfBounds()){
            this.activePiece.y -= 1;
            this.lockPice();
        }

    }

    rotatePiece(){
         this.rotateBlocks();


               


           if(this.hasCollision()){
                this.rotateBlocks(false)
           
            
        }
    }

    rotateBlocks(clockwise = true){
        const blocks = this.activePiece.blocks;
        const length = blocks.length;
        const x = Math.floor(length / 2);
        const y = length - 1;

        for (let i = 0; i < x; i++) {
           for (let j = i; j < y - i; j++) {
               const temp = blocks[i][j];

               if(clockwise){
                blocks[i][j] = blocks[y - j][i];
                blocks[y - j][i] = blocks[y - i][y - j];
                blocks[y - i ][y - j] = blocks[j][y - i];
                blocks[j][y - 1 ] = temp;
               }else {

               }
            
           
            }
        }


    }

    hasCollision(){
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;

        for(let y = 0; y < blocks.length; y++) {
            for ( let x = 0; x < blocks[y].length; x++){
                if (
                    blocks[y][x] &&
                    (this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined) ||
                    this.playfied[pieceY + y][pieceX + x]
                    ){
                    return true
                }
            }
        }

        return false;
    }

    lockPice(){
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;
        const blocks = this.activePiece.blocks;

        for(let y = 0; y < blocks.length; y++) {
            for ( let x = 0; x < blocks[y].length; x++){
                if(blocks[y][x]){
                    this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
                }                
            }
        }
    }
}
