package ma.projet.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import ma.projet.entities.Role;
import ma.projet.repository.RoleRepository;
import ma.projet.services.RoleService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/roles")
//@RequiredArgsConstructor
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
///////findAll
	@GetMapping
	public List<Role> findAllRole(){
		return roleService.findAll();
	}
	
	//PathVariable est utilisé lorsqu'on va faire entrer en argument l'id seulement
	//RequestBody est utilisé lorsqu'on va entrer en argument tout un objet
	
	
/////findById
	@GetMapping("/{id}")
	public ResponseEntity<Object> findById(@PathVariable Long id) {
		Role Role = roleService.findById(id);
		if(Role == null) {
			return new ResponseEntity<Object>("Role with ID " + id + " not found", HttpStatus.BAD_REQUEST);
		}
		else {
			return ResponseEntity.ok(Role);
		}
	}
	
///////createRole
	@PostMapping
	public Role createRole(@RequestBody Role Role) {
		Role.setId(0L);
		return roleService.create(Role);
	}
	
	
//////update
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateRole(@PathVariable Long id,@RequestBody Role Role) {
		if(roleService.findById(id) == null) {
			return new ResponseEntity<Object>("Role with ID " + id + " not found", HttpStatus.BAD_REQUEST);
		}
		else {
			Role.setId(id);
			return ResponseEntity.ok(roleService.update(Role));
		}
	}
	
///////delete
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteRole(@PathVariable Long id){
		Role Role = roleService.findById(id);
		if(Role == null) {
			return new ResponseEntity<Object>("Role with ID " + id + " not found", HttpStatus.BAD_REQUEST);
		}
		else {
			roleService.delete(Role);
			return ResponseEntity.ok("Role has been deleted");
		}
	}
}
