



export class like{

    /**
     *
     */
    constructor(private _count:number,private _selected:boolean) {
            
    }

    OnClick=(state:boolean)=>{
        if(state)
        {
            this._count+=1;
            console.log('state is selcted: '+this.Count)
        }else{
            this._count-=1;
            console.log('state is NOT selcted')
        }
    }

    get Count(){
        return this._count;
    }

    get Selected(){
        return this.Selected;
    }
}


    var liketest= new like(10,true);
    liketest.OnClick(true);
    liketest.Count=1;
    console.log('selected: '+liketest.Count);
    liketest.OnClick(false);
    console.log('selected: '+liketest.Count);

