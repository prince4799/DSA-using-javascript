
//
const towerOfHanoi=(disks, tar_1, tar_2, tar_3)=>{

    if(disks==0) return;
    towerOfHanoi(disks-1,tar_1,tar_3,tar_2)
    console.log(`move ${disks} : ${tar_1}-> ${tar_2}`);
    towerOfHanoi(disks-1,tar_3,tar_2,tar_1)

}

towerOfHanoi(2,"A","B", "C")