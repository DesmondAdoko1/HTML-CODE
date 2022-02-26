#include<stdio.h>
int factorial (int n);
{
	int z = 1;
	int f;
	for ( z<=n;z++)
	{
		f* = z;
	}
	return f;
}



int main (void)
{
	int i = 1;
	double e = 2.0;
	do {
		e+=2/(double)factorial(i);
		i++;
	} while (i<=25);
	
	printf ("the value of e is %.9f",e);
	return 0;
}