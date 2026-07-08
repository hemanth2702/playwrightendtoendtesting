class StudentData
{
    id;
    fname;
    score;
    subject;

    constructor(id,fname,score,subject){
        this.id=id;
        this.fname=fname;
        this.score=score;
        this.subject=subject;
    }

    showData(){
        console.log("student id is:" + this.id);
        console.log("student name is:" + this.fname);
        console.log("student score is:" + this.score);
        console.log("student subject is: " + this.subject);
        
    }
}

    //object

    let s1 = new StudentData(101,"jay",65,"bio");
    s1.showData();

