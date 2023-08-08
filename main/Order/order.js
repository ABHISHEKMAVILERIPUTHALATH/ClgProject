console.log("HELLO");
var db = firebase.firestore();

                // Retrieve documents from the collection and render them in the div
                // var documentsContainer = document.getElementById('addon');
                var orderp = document.getElementById('op');
                var orderlist = document.getElementById("orderlist")

                // Function to render each document inside the div
                function renderDocumen(doc) {
                    let data = doc.data();
                // let documentDiv = document.createElement('div');
                // documentDiv.textContent = doc.data().item;
                // orderlist.appendChild(documentDiv);
                orderlist.innerHTML+=`
                <div class="Delivery">
                    <div>
                        <h3 >Eatc Delivery</h3>
                        <p >Item:${data.item}</p>
                        <p>${data.email}</p>
                        <p>Seat NO:${data.seat}</p>
                    </div>
                    <div>
                        <p>${data.count}X ${data.item}</p>
                        <p>${data.count}X${data.price}</p>
                        <p>total price ${data.count*data.price}</p>
                        <button id="ProdReady" onclick="deleteorder('${doc.id}')">Ready</button>
                    </div>
                </div>
                `
                }

                // var docfin=document.getElementById('fin');
                // function pas(final){
                //     findiv=document.createElement('div');
                //     findiv.textContent=final;
                //     docfin.appendChild(findiv);
                // }
                
                // console.log(count)
                var total=[]
                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocument() {
                    total[0]=0
                    total[1]=0
                    total[2]=null
                    
                    db.collection('orders') // Replace "your-collection-name" with the actual collection name
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            renderDocumen(doc);
                            total[0]+=doc.data().count*doc.data().price;
                            total[1]+=+(doc.data().count);
                            // total[1]+=1
                            
                            total[2]+=1
                            
                            console.log(total[2]);
                            document.querySelector(".prepno").innerHTML=total[2]
                            document.getElementById('totalorder').innerHTML="Total order:"+ total[1];
                            document.getElementById('earning').innerHTML="Total earning:"+ total[0];
                            
                            // let d=doc.data()
                            // let k=`<div>${d.item}</div>`;
                            // var final;
                            // final+=k
                            
                        }
                        ) ;       //pas(final);
                    })
                    .catch(function(error) {
                        console.error('Error fetching documents: ', error);
                    });
                }
                console.log(total[0]);

                    // Call the function to fetch and render the documents when needed
                    fetchAndRenderDocument();
                    var count=null
                    function deleteorder(id){
                        //
                        // console.log(id);
                        // console.log("❤️");
                        db.collection("orders").doc(id).delete().then(() => {
                            console.log("Document successfully deleted!");
                            orderlist.innerHTML="";
                            fetchAndRenderDocument();
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                        count+=1
                        document.querySelector(".redno").innerHTML=count;
                        document.getElementById('totaluser').innerHTML="Total no of users:"+ count;
                    }