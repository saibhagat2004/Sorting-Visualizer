
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
            // d is the number of characters in the input alphabet
            #define d 256

            void search(char pat[], char txt[], int q)
            {
                int M = strlen(pat);
                int N = strlen(txt);
                int i, j;
                int p = 0; // hash value for pattern
                int t = 0; // hash value for txt
                int h = 1;
            
                // The value of h would be "pow(d, M-1)%q"
                for (i = 0; i < M - 1; i++)
                    h = (h * d) % q;
            
                // Calculate the hash value of pattern and first
                // window of text
                for (i = 0; i < M; i++) {
                    p = (d * p + pat[i]) % q;
                    t = (d * t + txt[i]) % q;
                }
            
                // Slide the pattern over text one by one
                for (i = 0; i <= N - M; i++) {
            
                    // Check the hash values of current window of text
                    // and pattern. If the hash values match then only
                    // check for characters one by one
                    if (p == t) {
                        /* Check for characters one by one */
                        for (j = 0; j < M; j++) {
                            if (txt[i + j] != pat[j]) {
                                break;
                            }
                        }
                        
                        if (j == M)
                            cout << "Pattern found at index " << i
                                << endl;
                    }
            
                    // Calculate hash value for next window of text:
                    // Remove leading digit, add trailing digit
                    if (i < N - M) {
                        t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            
                        // We might get negative value of t, converting
                        // it to positive
                        if (t < 0)
                            t = (t + q);
                    }
                }
            }
            
             `           
            ;

        case 'Python':
            return  `

            # d is the number of characters in the input alphabet
            d = 256

            def search(pat, txt, q):
                M = len(pat)
                N = len(txt)
                i = 0
                j = 0
                p = 0 # hash value for pattern
                t = 0 # hash value for txt
                h = 1

                # The value of h would be "pow(d, M-1)%q"
                for i in range(M-1):
                    h = (h*d) % q

                # Calculate the hash value of pattern and first window
                # of text
                for i in range(M):
                    p = (d*p + ord(pat[i])) % q
                    t = (d*t + ord(txt[i])) % q

                # Slide the pattern over text one by one
                for i in range(N-M+1):
                    if p == t:
                        for j in range(M):
                            if txt[i+j] != pat[j]:
                                break
                            else:
                                j += 1

                        if j == M:
                            print("Pattern found at index " + str(i))

                # Calculate hash value for next window of text: Remove
                # leading digit, add trailing digit
                if i < N-M:
                    t = (d*(t-ord(txt[i])*h) + ord(txt[i+M])) % q

                    # We might get negative values of t, converting it to
                    # positive
                    if t < 0:
                        t = t+q

            
            `
            case 'Javascript':
                return `
                // d is the number of characters in
                // the input alphabet 
                let d = 256; 
    
                function search(pat, txt, q) 
                { 
                    let M = pat.length; 
                    let N = txt.length; 
                    let i, j; 
                    
                    // Hash value for pattern 
                    let p = 0; 
                    
                    // Hash value for txt 
                    let t = 0; 
                    let h = 1; 
    
                    // The value of h would be "pow(d, M-1)%q" 
                    for(i = 0; i < M - 1; i++) 
                        h = (h * d) % q; 
    
                    // Calculate the hash value of pattern and 
                    // first window of text 
                    for(i = 0; i < M; i++) 
                    { 
                        p = (d * p + pat[i].charCodeAt()) % q; 
                        t = (d * t + txt[i].charCodeAt()) % q; 
                    } 
    
                    // Slide the pattern over text one by one 
                    for(i = 0; i <= N - M; i++) 
                    { 
                        if (p == t) 
                        { 
                            
                            /* Check for characters one by one */
                            for(j = 0; j < M; j++) 
                            { 
                                if (txt[i+j] != pat[j]) 
                                    break; 
                            } 
    
                            if (j == M) 
                                document.write("Pattern found at index " + 
                                                i + " "); 
                        } 
    
                        // Calculate hash value for next window of text: Remove leading digit, add trailing digit 
                        if (i < N - M) 
                        { 
                            t = (d * (t - txt[i].charCodeAt() * h) + 
                                    txt[i + M].charCodeAt()) % q; 
    
                            // We might get negative value of t, converting it to positive 
                            if (t < 0) 
                                t = (t + q); 
                        } 
                    } 
                }       

                  `
            
            case 'C':
                return `

// d is the number of characters in the input alphabet
#define d 256

void search(char pat[], char txt[], int q)
{
	int M = strlen(pat);
	int N = strlen(txt);
	int i, j;
	int p = 0; // hash value for pattern
	int t = 0; // hash value for txt
	int h = 1;

	// The value of h would be "pow(d, M-1)%q"
	for (i = 0; i < M - 1; i++)
		h = (h * d) % q;

	// Calculate the hash value of pattern and first
	// window of text
	for (i = 0; i < M; i++) {
		p = (d * p + pat[i]) % q;
		t = (d * t + txt[i]) % q;
	}

	// Slide the pattern over text one by one
	for (i = 0; i <= N - M; i++) {

		// Check the hash values of current window of text
		// and pattern. If the hash values match then only
		// check for characters one by one
		if (p == t) {
			/* Check for characters one by one */
			for (j = 0; j < M; j++) {
				if (txt[i + j] != pat[j])
					break;
			}

			if (j == M)
				printf("Pattern found at index %d ", i);
		}

		// Calculate hash value for next window of text:
		// Remove leading digit, add trailing digit
		if (i < N - M) {
			t = (d * (t - txt[i] * h) + txt[i + M]) % q;

			if (t < 0)
				t = (t + q);
		}
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
