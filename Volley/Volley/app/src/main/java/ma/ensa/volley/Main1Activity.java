package ma.ensa.volley;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class Main1Activity extends AppCompatActivity {
    private Button btnFiliere, btnRole, btnStudent,btnAddStudent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main1);

        btnFiliere = findViewById(R.id.btnFiliere);
        btnRole = findViewById(R.id.btnRole);
        btnStudent = findViewById(R.id.btnStudent);
        btnAddStudent = findViewById(R.id.btn);
        btnAddStudent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Main1Activity.this, StudentActivity.class);
                startActivity(intent);
            }
        });


        btnFiliere.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Main1Activity.this, ListFiliereActivity.class);
                startActivity(intent);
            }
        });

        btnRole.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Main1Activity.this, ListRoleActivity.class);
                startActivity(intent);
            }
        });

        btnStudent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Main1Activity.this, ListStudentActivity.class);
                startActivity(intent);
            }
        });
    }
}
