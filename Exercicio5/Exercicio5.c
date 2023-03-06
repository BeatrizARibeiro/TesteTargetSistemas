#include <stdio.h>
#include <string.h>

int main() {
    char vetor[] = "Caixa";
    size_t size = strlen(vetor);
    for(int i = 0; (i < size / 2); i++) {
       char tmp = vetor[i]; //"primeira" posição
       vetor[i] = vetor[size - i - 1]; //recebe a "ultima" posição
       vetor[size - i - 1] = tmp; //"ultima" posição recebe o valor da primeira
    }
    printf("%s", vetor);

    return 0;
}
