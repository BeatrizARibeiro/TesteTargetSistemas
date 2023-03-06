#include<stdio.h>
#include<stdlib.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL,"Portuguese");
    int num, ant = 0, agr = 1, prox = 1, per = 0;

    scanf("%d", &num);

    while(prox <= num){
        if(num == ant || num == agr || num == prox){
            per = 1;
            break;
        }
        else{
            prox = ant + agr;
            ant = agr;
            agr = prox;
        }
    }

    if(per == 1 || num == 0)
        printf("%d pertence a sequência\n", num);
    else
        printf("%d não pertence a sequência\n", num);

    return 0;
}
