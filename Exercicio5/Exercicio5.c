#include <stdio.h>
#include <string.h>

int main() {
    char vetor[] = "Caixa";
    size_t size = strlen(vetor);
    for(int i = 0; (i < size / 2); i++) {
       char tmp = vetor[i]; //"primeira" posi��o
       vetor[i] = vetor[size - i - 1]; //recebe a "ultima" posi��o
       vetor[size - i - 1] = tmp; //"ultima" posi��o recebe o valor da primeira
    }
    printf("%s", vetor);

    return 0;
}
