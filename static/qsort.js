
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
            // Function to partition the array and return the pivot index
            int partition(int arr[], int low, int high) {
                int pivot = arr[high]; // Choose the last element as the pivot
                int i = low - 1; // Index of smaller element
            
                for (int j = low; j < high; ++j) {
                    if (arr[j] < pivot) {
                        // Swap arr[i+1] and arr[j]
                        swap(arr[++i], arr[j]);
                    }
                }
            
                // Swap arr[i+1] and arr[high] (put pivot in its correct position)
                swap(arr[i + 1], arr[high]);
                return i + 1;
            }
            
            // Recursive function to perform Quick Sort
            void quickSort(int arr[], int low, int high) {
                if (low < high) {
                    // Partition the array and get the pivot index
                    int pivotIndex = partition(arr, low, high);
            
                    // Recursively sort the subarrays
                    quickSort(arr, low, pivotIndex - 1);
                    quickSort(arr, pivotIndex + 1, high);
                }
            }
            
             `           
            ;

        case 'Python':
            return  `

            def partition(arr, low, high):
                pivot = arr[high]  # Choose the last element as the pivot
                i = low - 1  # Index of smaller element
        
                for j in range(low, high):
                    if arr[j] < pivot:
                        # Swap arr[i+1] and arr[j]
                        arr[i + 1], arr[j] = arr[j], arr[i + 1]
                        i += 1
        
                # Swap arr[i+1] and arr[high] (put pivot in its correct position)
                arr[i + 1], arr[high] = arr[high], arr[i + 1]
                return i + 1
            
            def quick_sort(arr, low, high):
                if low < high:
                    # Partition the array and get the pivot index
                    pivot_index = partition(arr, low, high)
                
                    # Recursively sort the subarrays
                    quick_sort(arr, low, pivot_index - 1)
                    quick_sort(arr, pivot_index + 1, high)
            
            if __name__ == "__main__":
                arr = [12, 4, 5, 6, 7, 3, 1, 15]
                n = len(arr)
            
                print("Original array:", arr)
                quick_sort(arr, 0, n - 1)
                print("Sorted array:", arr)
        

            `
            case 'Javascript':
                return `
                function partition(arr, low, high) {
                    const pivot = arr[high]; // Choose the last element as the pivot
                    let i = low - 1; // Index of smaller element
                
                    for (let j = low; j < high; ++j) {
                        if (arr[j] < pivot) {
                            // Swap arr[i+1] and arr[j]
                            [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
                            i += 1;
                        }
                    }
                
                    // Swap arr[i+1] and arr[high] (put pivot in its correct position)
                    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                    return i + 1;
                }
                
                function quickSort(arr, low, high) {
                    if (low < high) {
                        // Partition the array and get the pivot index
                        const pivotIndex = partition(arr, low, high);
                
                        // Recursively sort the subarrays
                        quickSort(arr, low, pivotIndex - 1);
                        quickSort(arr, pivotIndex + 1, high);
                    }
                }                

                  `
            
            case 'C':
                return `

                // Function to partition the array and return the pivot index
                int partition(int arr[], int low, int high) {
                    int pivot = arr[high]; // Choose the last element as the pivot
                    int i = low - 1; // Index of smaller element
                
                    for (int j = low; j < high; ++j) {
                        if (arr[j] < pivot) {
                            // Swap arr[i+1] and arr[j]
                            int temp = arr[++i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                
                    // Swap arr[i+1] and arr[high] (put pivot in its correct position)
                    int temp = arr[i + 1];
                    arr[i + 1] = arr[high];
                    arr[high] = temp;
                    return i + 1;
                }
                
                // Recursive function to perform Quick Sort
                void quickSort(int arr[], int low, int high) {
                    if (low < high) {
                        // Partition the array and get the pivot index
                        int pivotIndex = partition(arr, low, high);
                
                        // Recursively sort the subarrays
                        quickSort(arr, low, pivotIndex - 1);
                        quickSort(arr, pivotIndex + 1, high);
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
