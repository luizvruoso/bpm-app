package com.bpmapi.controller;

import com.bpmapi.model.sql.User;
import com.bpmapi.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/register/")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @PostMapping("users")
    public User createUser(@RequestBody User user) {
        return this.userRepository.save(user);
    }

//    @PutMapping("users/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Integer id ,@Valid @RequestBody User userDetails) {
//
//        User user = userRepository.findById(id).orElseThrow();
//
//        user.setName(userDetails.getName());
//        user.setBirthDate(userDetails.getBirthDate());
//        user.setPhone(userDetails.getPhone());
//
//        return ResponseEntity.ok(this.userRepository.save(user));
//    }

//    @DeleteMapping("users/{id}")
//    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Integer id) {
//
//        User user = userRepository.findById(id).orElseThrow();
//
//        this.userRepository.delete(user);
//
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//
//        return response;
//    }

}
