
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
            void search(string& pat, string txt)
            {
                int M = pat.size();
                int N = txt.size();

                /* A loop to slide pat[] one by one */
                for (int i = 0; i <= N - M; i++) {
                    int j;

                    /* For current index i, check for pattern match */
                    for (j = 0; j < M; j++)
                        if (txt[i + j] != pat[j])
                            break;

                    if (j == M) // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
                        cout << "Pattern found at index " << i << endl;
                }
            }
            
             `           
            ;

        case 'Python':
            return  `


            def search(pat, txt):
                M = len(pat)
                N = len(txt)

                # A loop to slide pat[] one by one */
                for i in range(N - M + 1):
                    j = 0

                    # For current index i, check
                    # for pattern match */
                    while(j < M):
                        if (txt[i + j] != pat[j]):
                            break
                        j += 1

                    if (j == M):
                        print("Pattern found at index ", i)

            `
            case 'Javascript':
                return `
                function search(txt, pat)
                {
                    let M = pat.length;
                    let N = txt.length;
                
                    /* A loop to slide pat one by one */
                    for (let i = 0; i <= N - M; i++) {
                        let j;
                
                        /* For current index i, check for pattern 
                        match */
                        for (j = 0; j < M; j++)
                            if (txt[i + j] != pat[j])
                                break;
                
                        // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
                        if (j == M)
                            document.write("Pattern found at index " + i + "&lt;/br&gt;");
                    }
                }                

                  `
            
            case 'C':
                return `
                void search(char* pat, char* txt)
                {
                    int M = strlen(pat);
                    int N = strlen(txt);
                 
                    /* A loop to slide pat[] one by one */
                    for (int i = 0; i <= N - M; i++) {
                        int j;
                 
                        /* For current index i, check for pattern match */
                        for (j = 0; j < M; j++)
                            if (txt[i + j] != pat[j])
                                break;
                 
                        if (j == M) // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
                            printf("Pattern found at index %d &bsol;n", i);
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
