
let code_syntex = generate('C++');
document.getElementById("code-snippet").innerHTML = "<pre>" + code_syntex + "</pre>";

var buttons = document.querySelectorAll(".code");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var code = this.textContent;
        var code_syntex = generate(code);
        document.getElementById("code-snippet").innerHTML = "<pre>" + code_syntex + "</pre>";

        // Remove the "clicked_button" class from all buttons
        buttons.forEach(function (btn) {
            btn.classList.remove("clicked_button");
        });
        // Add the "clicked_button" class to the clicked button
        this.classList.add("clicked_button");
    });
});
copyBtn.addEventListener("click", function () {
    var codeSnippet = document.getElementById("code-snippet");
    copyTextToClipboard(codeSnippet.innerText);
});

function generate(language){

    switch(language){
        case 'C++':
            return `
            // Swap function
            void swap(int *xp, int *yp) {
                int temp = *xp;
                *xp = *yp;
                *yp = temp;
            }
            
            // Selection sort function
            void selectionSort(int arr[], int n) {
                int i, j, min_idx;
                for (i = 0; i < n-1; i++) {
                    // Find the minimum element in the unsorted array
                    min_idx = i;
                    for (j = i+1; j < n; j++) {
                        if (arr[j] < arr[min_idx])
                            min_idx = j;
                    }
                    // Swap the minimum element with the current element
                    swap(&arr[min_idx], &arr[i]);
                }
            } `           
            ;

        case 'Python':
            return  `
            def selection_sort(arr):
            n = len(arr)
            for i in range(n - 1):
                min_idx = i
                for j in range(i + 1, n):
                    if arr[j] < arr[min_idx]:
                        min_idx = j
                # Swap the minimum element with the current element
                arr[i], arr[min_idx] = arr[min_idx], arr[i]
        
            # Example usage
            if __name__ == "__main__":
                my_array = [-2, 45, 0, 11, -9, 88, -97, -202, 747]
                selection_sort(my_array)
                print("The array after sorting in ascending order by selection sort is:")
                print(my_array)
        

            `
            case 'Javascript':
                return `
                function selectionSort(inputArr) {
                    const n = inputArr.length;
                    for (let i = 0; i < n; i++) {
                        // Finding the smallest number in the unsorted subarray
                        let min = i;
                        for (let j = i + 1; j < n; j++) {
                            if (inputArr[j] < inputArr[min]) {
                                min = j;
                            }
                        }
                        // Swapping the elements
                        if (min !== i) {
                            const tmp = inputArr[i];
                            inputArr[i] = inputArr[min];
                            inputArr[min] = tmp;
                        }
                    }
                    return inputArr;
                }
                  `
            
            case 'C':
                return `
                // Swap function
                void swap(int* xp, int* yp) {
                    int temp = *xp;
                    *xp = *yp;
                    *yp = temp;
                }

                // Selection sort function (returns the sorted array)
                void selectionSort(int arr[], int n) {
                    int i, j, min_idx;
                    for (i = 0; i < n - 1; i++) {
                        min_idx = i;
                        for (j = i + 1; j < n; j++) {
                            if (arr[j] < arr[min_idx])
                                min_idx = j;
                        }
                        swap(&arr[min_idx], &arr[i]);
                    }
                }

                // Function to print an array
                void printArray(int arr[], int size) {
                    for (int i = 0; i < size; i++) {
                        printf("%d ", arr[i]);
                    }
                }

                  `
                


    }
}

function copyTextToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Code copied to clipboard!");
}

document.getElementById("copyBtn").addEventListener("mouseover",function(){
    document.getElementById("copyBtn").innerHTML="<i class='bx bx-clipboard bx-tada' ></i> Copy to Clipboard "
})
document.getElementById("copyBtn").addEventListener("mouseout",function(){
    document.getElementById("copyBtn").innerHTML="<i class='bx bx-clipboard'></i> Copy to Clipboard"
})
