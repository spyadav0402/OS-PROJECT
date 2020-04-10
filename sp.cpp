#include<stdio.h>
#include<conio.h>
int main()
{
    int bt[10],p[10],at[10],n,temp,tt,i,j,wt[10],sum=0,total=0;
    float avg;
    printf("Enter total no of proces:\n");
    scanf("%d",&n);
    printf("Enter burst time for each process:-\n");
    for(i=0;i<n;i++)
    {
        printf("Burst time of process P%d:\n",i);
        scanf("%d",&bt[i]);
        p[i]=i;
        printf("Arrival time of process P%d\n",i);
        scanf("%d",&at[i]);
        
    }
    for(i=0;i<n-1;i++)
    {
        for(j=i+1;j<n;j++)
        {
            if(bt[i]>bt[j])
            {
                temp=bt[i];
                bt[i]=bt[j];
                bt[j]=temp;
                temp=p[i];
                p[i]=p[j];
                p[j]=temp;
            }
        }
    }
    wt[0]=0;
    for(i=1;i<n;i++)
    {
        wt[i]=wt[i-1]+bt[i-1];
    }
    for(i=0;i<n;i++)
    {
        sum+=wt[i];
    }
    avg=(float)sum/n;
    printf("Waiting time for each process:-\n");
    for(i=0;i<n;i++)
    {
        printf("Waiting time for process P%d is %d sec.\n",p[i],wt[i]);
       
    }
    printf("Average waiting time is %f sec.\n",avg);
    for(i=0;i<n;i++)
    {
    	tt=bt[i]+(2*n);
	}
    printf("total time %d",tt);
    getch();
    return 0;
 }

