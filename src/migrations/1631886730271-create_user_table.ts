import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserTable1631886730271 implements MigrationInterface {
  name = 'createUserTable1631886730271';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`my_nestjs_project\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(25) NOT NULL, \`first_name\` varchar(55) NOT NULL, \`middle_name\` varchar(55) NOT NULL, \`last_name\` varchar(55) NOT NULL, \`birth_date\` date NOT NULL, \`is_active\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`my_nestjs_project\`.\`user\``);
  }
}
