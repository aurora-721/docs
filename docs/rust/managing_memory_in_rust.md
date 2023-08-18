# Ownership and Borrowing in Rust: A Comprehensive Guide to Memory Management

Rust is a high-level programming language focused on performance and safety, especially safe concurrency. It incorporates a system of ownership with a set of rules that the compiler checks at compile time. Here, we'll delve into how Rust manages memory, especially through the concepts of ownership, borrowing, and slices.

## The Stack and the Heap

Understanding how Rust handles memory begins with understanding the concepts of the stack and the heap. These are parts of your computer's memory where data is stored when a program runs.

However, before we dive deep into that let's first take a step back and think about what happens when you run a program on your computer.

### How computers work?

At a very high level, your computer has three key components involved in running programs:

- **The CPU (Central Processing Unit):** This is like the brain of the computer. It performs the operations that your program tells it to do.
  
- **Memory (RAM - Random Access Memory):** This is where your program and the data it's working on are stored while the program is running. Memory is like a big, empty space where your program can store and retrieve data.
  
- **Storage (Hard Disk, SSD):** This is where your program and its data are stored when not running. Storage is like a big, filing cabinet where your program and its files live when they're not currently being used.

For more info on How Computers Work checkout this video. Now, let's zoom in on memory (RAM). There are two main parts of memory where your program can store data: the stack and the heap.

The stack and the heap are both parts of memory that can be used by your program to store data, but they're used in different ways.

### The Stack

Think of the stack like a stack of books. When you add a new book (some data), you put it on top of the stack. When you want to remove a book, you also take it from the top of the stack. This is why the stack is referred to as "Last-In, First-Out" or LIFO.

In Rust, data stored on the stack must have a known, fixed size. This is because Rust needs to know how much memory to allocate when it pushes onto the stack.

```rust
fn main() {
    let x = 10; // x is stored on the stack
}
```

In the above example, `x` is an integer, which has a fixed size, so it's stored on the stack. When `main` finishes running, `x` goes out of scope and is popped off the stack.

### The Heap

The heap, on the other hand, is more like a messy room. In Rust, data stored on the heap can have a dynamic size. But because the heap is disorganized, it's slower to access. You have to follow a pointer to get to the data you want.

```rust
fn main() {
    let x = Box::new(10); // x is stored on the heap
}
```

In the above example, `x` is a box, which is a type that allocates memory on the heap. The actual integer is stored on the heap, and a pointer to the integer is stored on the stack. When `main` finishes running, `x` goes out of scope, the memory on the heap is freed, and the pointer is popped off the stack.

For Image reference on how the Stack and the Heap works, I really like this simple image from the article Stack, Heap, Value Type, and Reference Type in C#.

## Ownership Rules

The ownership rules in Rust are:

1. Each value in Rust has a variable that's its owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

Consider this example:

```rust
fn main() {
    let s = String::from("hello"); 
    takes_ownership(s);
    let x = 5;           
    makes_copy(x);                 
}

fn takes_ownership(some_string: String) { 
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) { 
    println!("{}", some_integer);
}
```

## Borrowing and References

Borrowing allows a function to use a value without taking ownership of it, done using references created with the `&` symbol.

### Immutable References

```rust
fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);
    println!("The length of '{}' is {}.", s, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

### Mutable References

You can have only one mutable reference to a particular piece of data in a specific scope. This restriction prevents data races at compile time.

```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

## The Slice Type

A slice is a reference to part of a collection. Slices can be used with arrays, strings, Vecs, and other data structures.

### String Slices

```rust
let s = String::from("Hello, world!");
let hello = &s[0..5];
let world = &s[7..13];
```

### Array Slices

```rust
let arr = [1, 2, 3, 4, 5];
let slice = &arr[1..3];
```

### Lifetimes and Slices

A slice cannot outlive the data it references.

```rust
{
    let s = String::from("hello");
    let t = &s[0..2];
} 
```

## Conclusion

Rust's memory management system, through ownership, borrowing, and slices, ensures efficient and safe code. These concepts are crucial for mastering Rust, impacting both the design and structure of your applications.
