let b=[2,5,7,9,6,8,1,3,4];

class SortArray

{

 constructor()
 {

    
 }


SortArray(a)

{

  Object.defineProperty(SortArray,'a',

  {

    get : function()

    {

     return this.a;

    }

  });

   let temp;

   for(let i=0;i<a.length;i++)

   {

    for(let j=i;j<a.length;j++)

    {

      if(a[i] >a[j])

      {

        temp=a[i];

        a[i]=a[j];

        a[j]=temp;

      }

    }

  }

  
  console.log(a);

 }

}


let o = [
  {
    num : 5
  },
  {
    num : 3
  },
  {
    num : 7
  }
  ]




class SortObjectArray extends SortArray

{

  constructor()
  {

    super();

  }

  SortObjectArray(o)
  {


   let p=[];


   for(let i=0;i<o.length;i++)

   {

   p[i]=o[i].num;

   }

   new SortArray(p);

   let tem;

   for(let i=0;i<o.length;i++)


   {


    for(let j=0;j<o.length;j++)

    {

      if(p[i]===o[j].num)

      {

        tem=o[i];

        o[i]=o[j];

        o[j]=tem;

      }

     }

    }


  console.log(o)

 }

}

let m=new SortArray();

let s=m.SortArray(b);

console.log(s);

let n=new SortObjectArray();

let l=n.SortObjectArray(o);

console.log(l);