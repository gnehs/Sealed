package main

import "fmt"
import "time"
import "math/rand"

func main() {
	fmt.Println("尼好，世界") 
	r2 := rand.New(rand.NewSource(time.Now().Unix()))
	fmt.Printf("尼有 %v 根香蕉，庫\n",r2.Intn(30)) 
	fmt.Println("尼有",r2.Intn(30),"根香蕉，庫") 
	fmt.Println("尼有",r2.Intn(30),"根香蕉，庫") 
}